
import { Language } from './types';
import { CONTENT } from './constants';
import React, { useState, useEffect } from 'react';

const LogoIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M42 50L18 72C16 74 14 73 14 70V30C14 27 16 26 18 28L42 50Z" 
      fill="#59A59B" 
      stroke="#59A59B"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path 
      d="M58 50L82 72C84 74 86 73 86 70V30C86 27 84 26 82 28L58 50Z" 
      fill="#F38D3E" 
      stroke="#F38D3E"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="9" fill="#A4C639" />
  </svg>
);

const BrandLogo = ({ size = "md", color = "dark", lang = "he" }: { size?: "sm" | "md" | "lg", color?: "dark" | "light", lang?: Language }) => {
  const isDark = color === "dark";
  const isRtl = lang === "he";
  
  const iconClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12 md:w-16 md:h-16",
    lg: "w-20 h-20 md:w-24 md:h-24",
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  const subtextClasses = {
    sm: "text-[6px]",
    md: "text-[7px] md:text-[9px]",
    lg: "text-[9px] md:text-[11px]",
  };

  return (
    <div className={`flex items-center gap-2 md:gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
      <LogoIcon className={iconClasses[size]} />
      <div className={`flex flex-col justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
        <span className={`font-brand font-bold uppercase leading-none tracking-tight ${textClasses[size]} ${isDark ? 'text-charcoal' : 'text-white'}`}>
          Targum
        </span>
        <span className={`uppercase font-bold tracking-tight mt-1 whitespace-nowrap opacity-80 ${subtextClasses[size]} text-[#59A59B]`}>
          {lang === 'he' ? 'תרגומים רשמיים: עברית ספרדית' : 'TRADUCCIONES OFICIALES: HEBREO ESPAÑOL'}
        </span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('he');
  const t = CONTENT[lang];
  const isRtl = lang === 'he';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const loadTally = () => {
      // @ts-ignore
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
          const iframe = el as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = loadTally;
      script.onerror = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }
  }, []);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <div className={`min-h-screen bg-white font-sans ${lang === 'he' ? 'font-assistant' : 'font-inter'}`}>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-row items-center justify-between h-20 md:h-24 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <BrandLogo lang={lang} color="dark" size="md" />
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer">{t.nav.about}</a>
              <a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer">{t.nav.services}</a>
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer">{lang === 'he' ? 'צור קשר' : 'Contacto'}</a>
            </nav>
            <div className="flex items-center gap-3 md:gap-6">
              <div className={`flex items-center gap-2 text-xs font-bold ${isRtl ? 'border-r pr-3 md:pr-6 md:border-r-0 md:border-l md:pl-6' : 'border-l pl-3 md:pl-6'} border-slate-200`}>
                <button onClick={() => toggleLang('he')} className={`transition-colors p-1 ${lang === 'he' ? 'text-primary' : 'text-slate-400'}`}>HE</button>
                <span className="text-slate-300">|</span>
                <button onClick={() => toggleLang('es')} className={`transition-colors p-1 ${lang === 'es' ? 'text-primary' : 'text-slate-400'}`}>ES</button>
              </div>
              <button onClick={() => scrollTo('contact')} className="bg-[#F38D3E] hover:bg-[#E27C2D] text-white px-3 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all shadow-md">
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-charcoal text-white py-16 md:py-24 lg:py-32 hero-gradient min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-lime"></span>
              {t.hero.badge}
            </div>
            <h1 className="font-display text-4xl md:text-7xl lg:text-[90px] font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-white">
              {t.hero.title} <br/>
              <span className="bg-gradient-to-r from-[#4DB6AC] via-[#A4C639] to-[#F38D3E] bg-clip-text text-transparent inline-block">
                {t.hero.accent}
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-xl mb-8 md:mb-12 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <button onClick={() => scrollTo('contact')} className="bg-[#F38D3E] hover:bg-[#E27C2D] text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                {t.hero.ctaPrimary}
                <span className={`material-symbols-outlined ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
              </button>
              <button onClick={() => scrollTo('services')} className="bg-[#2D343E] hover:bg-[#373F4B] border border-white/10 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all">
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Subtitle is emphasized, rest is standard */}
      <section id="about" className="py-20 md:py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col ${isRtl ? 'items-start text-right' : 'items-start text-left'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-600 text-sm font-bold uppercase tracking-widest mb-6">
              {t.aboutSection.title}
            </div>
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 leading-tight">
                {t.aboutSection.subtitle}
              </h2>
              {t.aboutSection.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isRtl ? 'md:text-right' : 'md:text-left'} md:mb-16`}>
            <h2 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-3">{t.services.label}</h2>
            <h3 className="text-3xl md:text-5xl font-display font-black text-slate-900">{t.services.title}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.services.items.map((item, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-500/30 hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
                  <span className="material-symbols-outlined text-teal-500 text-3xl md:text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
                <div className="text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line flex-grow">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1F25] rounded-[2rem] md:rounded-[4rem] p-6 md:p-20 relative overflow-hidden shadow-2xl">
            <div className={`mb-10 md:mb-16 max-w-2xl mx-auto text-center`}>
              <h2 className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4">{lang === 'he' ? 'צרו איתנו קשר' : 'Contáctenos'}</h2>
              <p className="text-slate-200 text-xl md:text-4xl font-display font-black leading-tight mb-4 md:mb-6">
                {lang === 'he' ? 'מוכנים להתחיל? אנחנו כאן לכל שאלה' : '¿Listo para empezar? Estamos aquí para ayudarle'}
              </p>
              <p className="text-slate-400 text-sm md:text-xl">
                {lang === 'he' ? 'בחרו את הדרך הנוחה לכם ליצור קשר או מלאו את הטופס למטה' : 'Elija su método de contacto preferido o complete el formulario a continuación'}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
              <a href="https://wa.me/50685846169" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-green-500/10 hover:border-green-500/30 transition-all flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-8 md:h-8 fill-green-500" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.604a11.845 11.845 0 005.923 1.585h.005c6.637 0 12.032-5.396 12.035-12.031a11.77 11.77 0 00-3.517-8.403z"/></svg>
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-2">WhatsApp</h3>
                <p className="text-slate-400 text-[10px] md:text-sm">{lang === 'he' ? 'מענה מיידי' : 'Respuesta inmediata'}</p>
              </a>
              <a href="https://www.instagram.com/targumcr/" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-pink-500/10 hover:border-pink-500/30 transition-all flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-pink-500/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-8 md:h-8 fill-pink-500" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-2">Instagram</h3>
                <p className="text-slate-400 text-[10px] md:text-sm">@targumcr</p>
              </a>
              <div onClick={() => scrollTo('contact')} className="group p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-primary/10 hover:border-primary/30 transition-all flex flex-col items-center text-center cursor-pointer">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-xl md:text-3xl">phone</span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-2">{lang === 'he' ? 'טלפון' : 'Teléfono'}</h3>
                <div className="flex flex-col text-slate-400 text-[10px] md:text-sm" dir="ltr">
                  <span>+506 8584 6169</span>
                  <span>+506 8655 4894</span>
                </div>
              </div>
              <div onClick={() => scrollTo('contact')} className="group p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all flex flex-col items-center text-center cursor-pointer">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-teal-500/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-teal-400 text-xl md:text-3xl">email</span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-0.5 md:mb-2">Email</h3>
                <p className="text-slate-400 text-[10px] md:text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full" title="targumaviram@gmail.com">targumaviram@gmail.com</p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-t-2xl md:rounded-t-3xl border-b border-slate-100 p-2.5 md:p-3 flex items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-slate-400 font-bold text-[8px] md:text-[10px] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[10px] md:text-xs">description</span>
                  {lang === 'he' ? 'טופס הגשת מסמכים' : 'Formulario de envío'}
                </div>
                <div className="w-8 md:w-10"></div>
              </div>
              <div className="bg-white rounded-b-2xl md:rounded-b-[2rem] shadow-2xl overflow-hidden relative" style={{ minHeight: '400px' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50/20">
                   <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
                <iframe 
                  data-tally-src="https://tally.so/embed/9qW6b5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="500" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Contact us"
                  className="w-full relative z-10"
                  style={{ minHeight: '500px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F25] text-white pt-20 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-20 mb-16 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            
            <div className={`flex flex-col max-w-lg ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
              <div className="mb-8">
                <BrandLogo lang={lang} color="light" size="lg" />
              </div>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                {t.footer.desc}
              </p>
            </div>

            <div className={`flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
              <h5 className="font-bold text-xl mb-8 text-white uppercase tracking-tight">
                {t.footer.contactTitle}
              </h5>
              <div className="space-y-6">
                <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="flex flex-col items-end text-slate-300 font-medium text-lg leading-snug" dir="ltr">
                    <span>+506 8584 6169</span>
                    <span>+506 8655 4894</span>
                  </div>
                  <span className="material-symbols-outlined text-teal-400 text-2xl mt-1">phone</span>
                </div>
                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className="text-slate-300 font-medium text-lg whitespace-nowrap overflow-hidden">
                    targumaviram@gmail.com
                  </span>
                  <span className="material-symbols-outlined text-teal-400 text-2xl">mail</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>{t.footer.copy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
