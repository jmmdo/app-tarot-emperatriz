import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Star, Eye, Heart } from 'lucide-react';

const App = () => {
  const [dailyMessage, setDailyMessage] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [visitCount, setVisitCount] = useState('...');

  // Array of magical positive messages for the interactive feature
  const messages = [
    "✨ Hoy es un día perfecto para confiar en tu intuición.",
    "🌟 El universo te está guiando hacia algo hermoso. Mantén la fe.",
    "💖 Eres más fuerte y capaz de lo que imaginas. ¡Respira y avanza!",
    "🌙 Suelta aquello que ya no te sirve y deja espacio para lo nuevo.",
    "🦋 Una hermosa transformación está ocurriendo en tu interior.",
    "🌻 Tu energía atrae cosas maravillosas. Mantente positivo.",
    "✨ Los ángeles y guías te rodean con amor infinito hoy."
  ];

  useEffect(() => {
    // Lógica del contador simulado usando localStorage
    let savedCount = localStorage.getItem('tarot_visits');
    if (!savedCount) {
      savedCount = 1234 + Math.floor(Math.random() * 50);
    } else {
      savedCount = parseInt(savedCount) + 1;
    }
    localStorage.setItem('tarot_visits', savedCount.toString());
    setVisitCount(savedCount);
  }, []);

  const drawCard = () => {
    setIsDrawing(true);

    // Simulate a little magical loading time
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setDailyMessage(messages[randomIndex]);
      setIsDrawing(false);
    }, 1000);
  };

  const closeMessage = () => {
    setDailyMessage(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden flex flex-col">

      {/* Magical Background Elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-8 sm:py-12 px-4 w-full max-w-md mx-auto pb-10 flex-grow">

        {/* Profile Image */}
        <div className="relative mb-5 group mt-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full blur group-hover:blur-md transition-all duration-300 opacity-75"></div>
          <img
            src="/profile.jpg"
            alt="Tarot by Emperatriz 21"
            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#0f172a] object-cover shadow-2xl bg-white"
          />
          <div className="absolute -bottom-2 -right-2 bg-slate-800 p-2 rounded-full border-2 border-[#0f172a] text-yellow-400 shadow-lg">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Header / Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-center">
          @tarotbyemperatriz21
        </h1>

        {/* Bio Section */}
        <div className="mt-5 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-5 w-full border border-white/10 shadow-xl text-center space-y-3">
          <p className="text-base sm:text-lg font-medium text-pink-200 flex items-center justify-center gap-2">
            ✨ Tarot, sanación y mucho amor.
          </p>
          <p className="text-sm sm:text-base text-slate-200 flex items-center justify-center gap-2">
            🩺 Enfermera de profesión, terapeuta de alma.
          </p>
          <p className="text-sm sm:text-base text-slate-200 flex items-center justify-center gap-2">
            🤱 Mamá 24/7.
          </p>
          <div className="pt-3 mt-3 border-t border-white/10">
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-base sm:text-lg">
              Bienvenidos a mi mundo mágico!! 🌈
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full space-y-4 mb-10">
          <a
            href="https://www.tiktok.com/@tarotbyemperatriz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 sm:p-4 bg-black/50 hover:bg-black border border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group"
          >
            <div className="bg-white text-black p-2 rounded-lg group-hover:scale-110 transition-transform shrink-0">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
            <span className="flex-1 text-center font-semibold text-base sm:text-lg pr-8">Sígueme en TikTok</span>
          </a>

          <a
            href="https://www.instagram.com/tarotbyemperatriz21/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-purple-600/50 to-pink-600/50 hover:from-purple-600 hover:to-pink-600 border border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] group"
          >
            <div className="bg-white text-black p-2 rounded-lg group-hover:scale-110 transition-transform shrink-0">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <span className="flex-1 text-center font-semibold text-base sm:text-lg pr-8">Mi Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@Tarot-n2b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-3 sm:p-4 bg-red-600/50 hover:bg-red-600 border border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] group"
          >
            <div className="bg-white text-black p-2 rounded-lg group-hover:scale-110 transition-transform shrink-0">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <span className="flex-1 text-center font-semibold text-base sm:text-lg pr-8">Canal de YouTube</span>
          </a>
        </div>

        {/* Interactive Feature: Magic Message */}
        <div className="w-full bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-purple-500/30 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-20"><Moon className="w-8 h-8 sm:w-10 sm:h-10" /></div>

          <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-200">🔮 Oráculo del Día</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-5">Conecta con tu intuición y recibe un mensaje del universo.</p>

          {!dailyMessage ? (
            <button
              onClick={drawCard}
              disabled={isDrawing}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold py-3 px-4 sm:px-6 rounded-full w-full transition-all duration-300 transform hover:scale-105 shadow-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:scale-100 text-sm sm:text-base"
            >
              {isDrawing ? (
                <span className="animate-pulse flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> Canalizando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> Revelar Mensaje
                </span>
              )}
            </button>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500 bg-white/10 p-4 sm:p-5 rounded-xl border border-pink-500/30 mt-2">
              <p className="text-base sm:text-lg font-medium leading-relaxed italic text-pink-100">
                "{dailyMessage}"
              </p>
              <button
                onClick={closeMessage}
                className="mt-4 text-xs text-purple-300 hover:text-white uppercase tracking-wider font-semibold transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>

        {/* Visitor Counter */}
        <div className="mt-8 flex items-center justify-center gap-2 text-pink-200/80 bg-black/30 py-2 px-4 sm:px-6 rounded-full border border-pink-500/20 backdrop-blur-sm shadow-lg">
          <Eye className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            Almas mágicas: <strong className="text-white text-sm sm:text-base">{visitCount}</strong>
          </span>
        </div>

        {/* Footer */}
        <footer className="mt-10 mb-6 flex items-center justify-center gap-2 text-slate-400 text-xs sm:text-sm w-full">
          Hecho con <Heart className="w-3 h-3 text-pink-500" /> por Emperatriz
        </footer>

      </div>
    </div>
  );
};

export default App;