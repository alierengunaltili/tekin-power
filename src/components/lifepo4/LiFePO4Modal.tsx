'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';

interface LiFePO4ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const LiFePO4Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  gradient, 
  icon, 
  children 
}: LiFePO4ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      // Backdrop animasyonu
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      // Modal içerik animasyonu
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' }
      );
    }
  }, [isOpen]);

  const closeModal = () => {
    if (modalRef.current && contentRef.current) {
      // Kapanış animasyonu
      gsap.to(modalRef.current, { 
        opacity: 0, 
        duration: 0.3, 
        ease: 'power2.in' 
      });
      
      gsap.to(contentRef.current, { 
        opacity: 0, 
        scale: 0.9, 
        y: 20, 
        duration: 0.3, 
        ease: 'power3.in',
        onComplete: onClose
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={closeModal}
    >
      <div 
        ref={contentRef}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${gradient} p-6 rounded-t-3xl flex items-center justify-between sticky top-0 z-10`}>
          <div className="flex items-center">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl mr-4">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-white/80 text-sm">
                {description}
              </p>
            </div>
          </div>
          <button 
            onClick={closeModal}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LiFePO4Modal;
