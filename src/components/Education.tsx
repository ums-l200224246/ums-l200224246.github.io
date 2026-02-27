import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  description: string;
  current?: boolean;
}

// TODO: Edit data pendidikan kamu di sini. Tambahkan pendidikan sebelumnya (SMA/SMK) jika perlu.
const EDUCATION: EducationItem[] = [
  {
    period: '2022 - Sekarang',
    institution: 'Universitas Muhammadiyah Surakarta (UMS)',
    degree: 'S1 Informatika',
    description: 'Fokus mempelajari software development, artificial intelligence, dan data science. Aktif dalam pengembangan projek-projek berbasis AI.',
    current: true,
  },
];

export default function Education() {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Perjalanan akademik saya
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {EDUCATION.map((item, idx) => (
              <div
                key={idx}
                className="reveal relative flex gap-6"
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-16 justify-center">
                  <div className={`relative z-10 w-4 h-4 rounded-full mt-6 ${
                    item.current 
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}>
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-mono">{item.period}</span>
                    {item.current && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.institution}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {item.degree}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed ml-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
