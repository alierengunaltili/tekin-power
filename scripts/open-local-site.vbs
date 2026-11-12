Option Explicit
Dim shell, files, scriptFolder, nodePath, launcherPath, result
Set shell = CreateObject("WScript.Shell")
Set files = CreateObject("Scripting.FileSystemObject")
scriptFolder = files.GetParentFolderName(WScript.ScriptFullName)
nodePath = shell.ExpandEnvironmentStrings("%USERPROFILE%") & "\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
launcherPath = scriptFolder & "\open-local-site.cjs"
If Not files.FileExists(nodePath) Then
  MsgBox "Node.js bulunamadi. Tekin Power kisayolunun yeniden ayarlanmasi gerekiyor.", 48, "Tekin Power"
  WScript.Quit 1
End If
result = shell.Run(Chr(34) & nodePath & Chr(34) & " " & Chr(34) & launcherPath & Chr(34), 0, True)
If result <> 0 Then
  MsgBox "Site baslatilamadi. Proje klasorundeki .local-launcher gunluklerini kontrol edin.", 48, "Tekin Power"
End If
