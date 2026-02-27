import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 reveal">
            {/* TODO: Ganti email ke email asli kamu jika bukan email UMS */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:l200224246@student.ums.ac.id" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-sm">
                    l200224246@student.ums.ac.id
                  </a>
                </div>
              </div>
            </div>

            {/* TODO: Ganti lokasi jika bukan Surakarta */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Surakarta, Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Social Media</h3>
              <div className="flex gap-3">
                <a href="https://github.com/ums-l200224246" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                  <Github className="h-5 w-5" />
                </a>
                {/* TODO: Ganti URL LinkedIn ke profil kamu */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200 hover:scale-105">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/rxndrxx" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-pink-600 transition-all duration-200 hover:scale-105">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                window.location.href = `mailto:l200224246@student.ums.ac.id?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
              }}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tulis pesan kamu di sini..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}