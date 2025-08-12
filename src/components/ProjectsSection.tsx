'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight,
  Radio,
  Shield,
  Home,
  Drone,
  Zap,
  Bus,
  Car,
  Ship,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';

// GSAP ScrollTrigger plugin'ini kaydet
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animasyonu
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Projects cards animasyonu
      gsap.fromTo(projectsRef.current?.children || [],
        { y: 80, opacity: 0, rotateY: 45 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats animasyonu
      gsap.fromTo(statsRef.current?.children || [],
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      icon: Radio,
      title: 'Telekomünikasyon Baz İstasyonu',
      description: 'LiFePO₄ teknolojisi ile baz istasyonlarına uyarlanmış öncü enerji depolama çözümleri.',
      image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      location: 'İstanbul, Türkiye',
      date: '2024',
      capacity: '500kWh',
      tags: ['Telekomünikasyon', 'LiFePO₄', '24/7 Uptime']
    },
    {
      icon: Shield,
      title: 'Askeri Sistem Uygulamaları',
      description: 'Askeri araçlar ve sistemler için güvenilir, verimli ve uzun ömürlü enerji çözümleri.',
      image: 'bg-gradient-to-br from-green-600 to-emerald-600',
      location: 'Ankara, Türkiye',
      date: '2024',
      capacity: '1.2MWh',
      tags: ['Askeri', 'Güvenlik', 'Dayanıklılık']
    },
    {
      icon: Home,
      title: 'GES Çatı Projeleri',
      description: 'Off-grid GES projeleri ile işletmelerin enerji faturalarını büyük ölçüde düşürme.',
      image: 'bg-gradient-to-br from-orange-600 to-yellow-600',
      location: 'İzmir, Türkiye',
      date: '2024',
      capacity: '2.5MW',
      tags: ['Solar', 'Off-Grid', 'Ticari']
    },
    {
      icon: Home,
      title: 'Home Solar System',
      description: 'Modern evler için güvenilir, uzun ömürlü ve verimli enerji kaynaklarının sağlanması.',
      image: 'bg-gradient-to-br from-purple-600 to-violet-600',
      location: 'Bursa, Türkiye',
      date: '2024',
      capacity: '15kW',
      tags: ['Konut', 'Hibrit', 'Akıllı']
    },
    {
      icon: Drone,
      title: 'Drone Enerji Sistemleri',
      description: 'Hızla gelişen drone teknolojisinin enerji ihtiyaçları için yenilikçi çözümler.',
      image: 'bg-gradient-to-br from-red-600 to-pink-600',
      location: 'Teknokent, Türkiye',
      date: '2024',
      capacity: '50kWh',
      tags: ['İHA', 'Havacılık', 'Teknoloji']
    },
    {
      icon: Zap,
      title: 'Solar Pole Sistemleri',
      description: 'Enerji bağımsızlığını öncelik haline getiren, zorlu koşullarda sürekli enerji sağlayan çözümler.',
      image: 'bg-gradient-to-br from-indigo-600 to-blue-600',
      location: 'Çeşitli Lokasyonlar',
      date: '2024',
      capacity: '100kW',
      tags: ['Aydınlatma', 'Akıllı Şehir', 'IoT']
    },
    {
      icon: Bus,
      title: 'E-Bus Projeleri',
      description: 'Daha az titreşim ve gürültü ile yolcular için konforlu toplu taşıma deneyimi.',
      image: 'bg-gradient-to-br from-teal-600 to-cyan-600',
      location: 'Ankara, Türkiye',
      date: '2024',
      capacity: '300kWh',
      tags: ['Toplu Taşıma', 'Elektrikli', 'Şehir']
    },
    {
      icon: Car,
      title: 'Car Port Solar Systems',
      description: 'Otopark alanlarının üzerini kaplayan yapının çatısına güneş panelleri ile enerji üretimi.',
      image: 'bg-gradient-to-br from-lime-600 to-green-600',
      location: 'İstanbul, Türkiye',
      date: '2024',
      capacity: '750kW',
      tags: ['Otopark', 'Solar', 'Ticari']
    },
    {
      icon: Ship,
      title: 'Marin Enerji Sistemleri',
      description: 'Marin sektörü için enerji verimliliği, sürdürülebilirlik ve performans odaklı çözümler.',
      image: 'bg-gradient-to-br from-sky-600 to-blue-600',
      location: 'İzmir, Türkiye',
      date: '2024',
      capacity: '200kWh',
      tags: ['Denizcilik', 'Marin', 'Sürdürülebilir']
    }
  ];

  const stats = [
    { number: '500+', label: 'Tamamlanan Proje', icon: TrendingUp },
    { number: '50+', label: 'Mutlu Müşteri', icon: Home },
    { number: '25MW+', label: 'Kurulu Güç', icon: Zap },
    { number: '10+', label: 'Yıllık Deneyim', icon: Calendar }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Projelerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Farklı sektörlerde gerçekleştirdiğimiz başarılı projelerle enerji geleceğini şekillendiriyoruz.
            Her proje, yenilikçi teknoloji ve uzman ekibimizin deneyiminin bir yansımasıdır.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
              >
                {/* Project Image/Background */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Project Stats */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-lg rounded-xl px-3 py-2">
                    <div className="text-white font-semibold text-sm">{project.capacity}</div>
                  </div>

                  {/* Location & Date */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group/btn w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
                    <span>Proje Detayları</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Sizin Projeniz de Burada Olabilir
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Enerji ihtiyaçlarınız için özel çözümler tasarlıyor, hayalinizdeki projeyi gerçeğe dönüştürüyoruz.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Proje Teklifi Alın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
