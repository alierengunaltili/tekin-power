const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('C:/Users/merto/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const version = process.argv[2] ?? 'v1';
if (!/^v\d+$/.test(version)) throw new Error('Expected a version such as v2');

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    await page.setContent('<canvas width="1600" height="900"></canvas>');
    const photo = 'data:image/png;base64,' + fs.readFileSync(path.join(__dirname, `scene-${version}.png`)).toString('base64');
    const result = await page.evaluate(async (photo) => {
      const canvas = document.querySelector('canvas');
      const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true, antialias: false });
      if (!gl) throw new Error('WebGL unavailable');
      const vertex = `attribute vec2 position; varying vec2 uv;
        void main(){ uv=(position+1.0)*0.5; gl_Position=vec4(position,0.0,1.0); }`;
      const fragment = `precision highp float;
        varying vec2 uv; uniform sampler2D scene; uniform float phase;
        float protectedMotor(vec2 p, vec2 center, vec2 radius) {
          return smoothstep(0.85,1.12,length((p-center)/radius));
        }
        float flow(vec2 p, vec2 origin) {
          vec2 direction=normalize(vec2(-0.75,0.65));
          vec2 delta=p-origin;
          float along=dot(delta,direction);
          float across=dot(delta,vec2(-direction.y,direction.x));
          float width=0.012+max(along,0.0)*0.16;
          float cone=(1.0-smoothstep(width*0.3,width,abs(across)))
            *smoothstep(0.0,0.025,along)*(1.0-smoothstep(0.2,0.48,along));
          float streak=pow(max(0.0,sin(across*1900.0+sin(along*35.0))),14.0);
          float moving=pow(max(0.0,sin(along*310.0-phase*10.0+across*270.0)),12.0);
          return cone*streak*moving;
        }
        void main(){
          vec2 p=vec2(uv.x,1.0-uv.y);
          float zoom=1.008+0.004*(1.0-cos(phase));
          p=(p-0.5)/zoom+0.5;
          float water=smoothstep(0.58,0.65,p.y);
          float protect=protectedMotor(p,vec2(0.526,0.705),vec2(0.075,0.12))
            *protectedMotor(p,vec2(0.695,0.708),vec2(0.075,0.12));
          vec2 q=p;
          q.x+=water*protect*0.0008*sin(p.y*80.0-phase*2.0)*sin(p.x*32.0+phase);
          q.y+=water*protect*0.0005*sin(p.x*95.0+phase*3.0);
          vec3 color=texture2D(scene,vec2(q.x,1.0-q.y)).rgb;
          float light=sin(p.x*48.0+p.y*31.0+phase*2.0)*sin(p.y*63.0-p.x*21.0-phase);
          color+=vec3(0.012,0.025,0.03)*water*light;
          float currents=flow(p,vec2(0.49,0.745))+flow(p,vec2(0.655,0.755));
          color+=vec3(0.45,0.75,0.8)*currents*0.24*water*protect;
          gl_FragColor=vec4(color,1.0);
        }`;
      const compile = (type, text) => {
        const shader = gl.createShader(type); gl.shaderSource(shader, text); gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
        return shader;
      };
      const program=gl.createProgram();
      gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex)); gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));
      gl.linkProgram(program);
      if(!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
      gl.useProgram(program);
      const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
      gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      const location=gl.getAttribLocation(program,'position'); gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location,2,gl.FLOAT,false,0,0);
      const img=new Image(); img.src=photo; await img.decode();
      const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
      const phaseLocation=gl.getUniformLocation(program,'phase');
      const draw = phase => {gl.uniform1f(phaseLocation,phase); gl.drawArrays(gl.TRIANGLES,0,6); gl.finish();};
      draw(0);
      const stream=canvas.captureStream(24);
      const mimeType=MediaRecorder.isTypeSupported('video/webm;codecs=vp9')?'video/webm;codecs=vp9':'video/webm';
      const recorder=new MediaRecorder(stream,{mimeType,videoBitsPerSecond:12000000});
      const chunks=[]; recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
      const done=new Promise(resolve=>{recorder.onstop=async()=>{
        stream.getTracks().forEach(t=>t.stop());
        const blob=new Blob(chunks,{type:mimeType});
        const reader=new FileReader(); reader.onload=()=>resolve(reader.result.split(',')[1]); reader.readAsDataURL(blob);
      }});
      recorder.start(); const start=performance.now();
      function animate(now){const elapsed=now-start; draw(2*Math.PI*elapsed/10000); if(elapsed<10000)requestAnimationFrame(animate);else recorder.stop();}
      requestAnimationFrame(animate);
      return await done;
    }, photo);
    fs.writeFileSync(path.join(__dirname,`twin-motor-motion-${version}.webm`),Buffer.from(result,'base64'));
    console.log('Rendered twin motor concept: fixed engines, subtle camera drift and underwater flow.');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1});
