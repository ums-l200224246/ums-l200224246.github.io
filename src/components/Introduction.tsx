import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import profile from '/images/profile.jpg';

// TODO: Edit daftar role yang akan ditampilkan di typing effect
const ROLES = [
  'IT Specialist',
  'AI Enthusiast',
  'Web Developer',
  'Problem Solver',
];

export default function Introduction() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex <= 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-none dark:bg-gray-950 animate-gradient overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-60 animate-glow" />
            <img
              src={profile}
              alt="Raka Rendra Fayanto"
              className="relative h-36 w-36 rounded-full object-cover border-4 border-white dark:border-gray-800"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 animate-fade-in-up delay-200">
          Raka Rendra <span className="text-gradient">Fayanto</span>
        </h1>
        
        {/* Typing role */}
        <div className="h-10 mb-6 animate-fade-in-up delay-300">
          <span className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-mono">
            {'> '}{displayText}
            <span className="animate-blink text-blue-500 dark:text-blue-300">|</span>
          </span>
        </div>

        {/* Bio */}
        {/* TODO: Edit bio/deskripsi singkat tentang diri kamu */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 animate-fade-in-up delay-400">
          Mahasiswa Informatika UMS yang passionate tentang teknologi, AI, dan membangun solusi digital yang berdampak.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-5 mb-10 animate-fade-in-up delay-500">
          <a href="https://github.com/ums-l200224246" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Github className="h-6 w-6" />
          </a>
          {/* TODO: Ganti URL LinkedIn ke profil kamu, contoh: https://linkedin.com/in/username */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/rxndrxx" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-white hover:bg-pink-50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-600">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Lihat Project Saya
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
}