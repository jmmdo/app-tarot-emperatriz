import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Moon, 
  Star, 
  Eye, 
  Heart, 
  Compass, 
  BookOpen, 
  Crown, 
  Shield, 
  Anchor, 
  HeartHandshake, 
  Trophy, 
  Scale, 
  Hourglass, 
  Sprout, 
  GlassWater, 
  Zap, 
  CloudLightning, 
  Sun, 
  Bell, 
  Globe, 
  RefreshCw,
  Shuffle
} from 'lucide-react';

const ARCANOS = [
  {
    id: 0,
    roman: "0",
    name: "El Loco",
    icon: Compass,
    color: "from-indigo-500 via-purple-500 to-pink-500",
    message: "Aventúrate en el amor sin miedo, da ese salto de fe. Tu corazón puro sabe el camino y el universo sostiene cada uno de tus pasos."
  },
  {
    id: 1,
    roman: "I",
    name: "El Mago",
    icon: Sparkles,
    color: "from-cyan-400 via-teal-400 to-indigo-500",
    message: "Tienes toda la magia dentro de ti para manifestar la relación que sueñas. Cree en tu propio poder y mira cómo florecen los milagros."
  },
  {
    id: 2,
    roman: "II",
    name: "La Sacerdotisa",
    icon: BookOpen,
    color: "from-blue-600 via-indigo-600 to-slate-900",
    message: "Escucha el sabio y dulce susurro de tu intuición. En el silencio de tu alma se están tejiendo los sentimientos más sinceros y profundos."
  },
  {
    id: 3,
    roman: "III",
    name: "La Emperatriz",
    icon: Crown,
    color: "from-pink-500 via-rose-400 to-amber-300",
    message: "Irradias una calidez hermosa que atrae amor puro. Déjate consentir y florecer, eres un ser sumamente valioso y mereces toda la ternura."
  },
  {
    id: 4,
    roman: "IV",
    name: "El Emperador",
    icon: Shield,
    color: "from-red-600 via-amber-700 to-slate-800",
    message: "Construyes un amor seguro, fuerte y estable. Eres el refugio de paz para quienes te rodean; tu lealtad y cuidado son tu regalo más grande."
  },
  {
    id: 5,
    roman: "V",
    name: "El Papa",
    icon: Anchor,
    color: "from-emerald-600 via-teal-600 to-cyan-800",
    message: "Tus lazos de amor se fortalecen con el respeto mutuo, la comprensión y la sabiduría. Estás construyendo un vínculo duradero y sagrado."
  },
  {
    id: 6,
    roman: "VI",
    name: "Los Enamorados",
    icon: HeartHandshake,
    color: "from-pink-600 via-rose-500 to-red-500",
    message: "Elige siempre lo que haga sonreír a tu corazón. Una hermosa sintonía y decisiones llenas de ternura están alineándose en tu vida afectiva."
  },
  {
    id: 7,
    roman: "VII",
    name: "El Carro",
    icon: Trophy,
    color: "from-yellow-500 via-amber-500 to-orange-600",
    message: "Tu corazón avanza con paso firme y seguro hacia la felicidad. Nada puede detener el amor bonito que está destinado a llegar a tu vida."
  },
  {
    id: 8,
    roman: "VIII",
    name: "La Fuerza",
    icon: Sun,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    message: "Tu mayor superpoder es la dulzura y la compasión con la que tratas a otros. Con esa paciencia infinita conquistas cualquier tormenta."
  },
  {
    id: 9,
    roman: "IX",
    name: "El Ermitaño",
    icon: Eye,
    color: "from-slate-700 via-slate-600 to-violet-950",
    message: "Dedica un ratito a abrazar tu propia alma. Tu luz interior es hermosa y, al brillar con amor propio, iluminas el camino de quienes te buscan."
  },
  {
    id: 10,
    roman: "X",
    name: "La Rueda de la Fortuna",
    icon: RefreshCw,
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
    message: "El destino gira con una hermosa sonrisa para ti. Prepárate para sorpresas mágicas, reencuentros dulces y giros divinos en el amor."
  },
  {
    id: 11,
    roman: "XI",
    name: "La Justicia",
    icon: Scale,
    color: "from-emerald-500 via-teal-500 to-sky-700",
    message: "Hay un equilibrio precioso llegando a tu vida emocional. Cosecharás la honestidad, la paz y la correspondencia justa que tanto has sembrado."
  },
  {
    id: 12,
    roman: "XII",
    name: "El Colgado",
    icon: Hourglass,
    color: "from-indigo-600 via-purple-600 to-blue-900",
    message: "A veces ver el mundo al revés nos muestra detalles hermosos. Suelta el control, respira hondo y deja que el amor fluya a su propio y perfecto ritmo."
  },
  {
    id: 13,
    roman: "XIII",
    name: "La Muerte",
    icon: Sprout,
    color: "from-slate-800 via-purple-900 to-fuchsia-950",
    message: "Un renacer precioso está ocurriendo en tu corazón. Sueltas lo viejo con gratitud para abrir tus brazos a una nueva etapa llena de luz y ternura."
  },
  {
    id: 14,
    roman: "XIV",
    name: "La Templanza",
    icon: GlassWater,
    color: "from-teal-400 via-cyan-500 to-blue-600",
    message: "Tus emociones se llenan de una dulce calma y sanación. Tu corazón está en perfecta armonía, balanceando el amor con una paz maravillosa."
  },
  {
    id: 15,
    roman: "XV",
    name: "El Diablo",
    icon: Zap,
    color: "from-red-700 via-rose-800 to-black",
    message: "Un magnetismo irresistible y una pasión radiante te envuelven hoy. Abraza tu fuego interior con libertad, alegría y un toque de dulce travesura."
  },
  {
    id: 16,
    roman: "XVI",
    name: "La Torre",
    icon: CloudLightning,
    color: "from-amber-600 via-orange-700 to-stone-900",
    message: "Las viejas barreras caen para que puedas construir sobre bases de amor auténticas y transparentes. Estás más a salvo y libre que nunca."
  },
  {
    id: 17,
    roman: "XVII",
    name: "La Estrella",
    icon: Star,
    color: "from-sky-400 via-blue-500 to-indigo-900",
    message: "Eres una luz hermosa de esperanza. Tus sueños de amor están guiados por las estrellas celestiales, confía en que todo se está alineando para ti."
  },
  {
    id: 18,
    roman: "XVIII",
    name: "La Luna",
    icon: Moon,
    color: "from-indigo-800 via-purple-900 to-slate-950",
    message: "Sumérgete en la dulce profundidad de tu sensibilidad. Tus sueños y emociones te conectan de forma mágica y misteriosa con las almas que amas."
  },
  {
    id: 19,
    roman: "XIX",
    name: "El Sol",
    icon: Sun,
    color: "from-yellow-400 via-orange-500 to-red-500",
    message: "¡Brillas con una luz maravillosa! El amor te abraza hoy con calidez, risas infinitas y una felicidad tan grande que contagia a todo tu mundo."
  },
  {
    id: 20,
    roman: "XX",
    name: "El Juicio",
    icon: Bell,
    color: "from-emerald-500 via-amber-400 to-yellow-600",
    message: "Un despertar dulce y luminoso en tus afectos. Las heridas del pasado se desvanecen por fin y tu alma celebra un nuevo canto de felicidad."
  },
  {
    id: 21,
    roman: "XXI",
    name: "El Mundo",
    icon: Globe,
    color: "from-fuchsia-600 via-purple-600 to-blue-600",
    message: "Estás en perfecta sintonía con el latido del universo. Tu corazón ha completado un ciclo precioso y el amor infinito te rodea con plenitud."
  }
];

const App = () => {
  const [dailyMessage, setDailyMessage] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [visitCount, setVisitCount] = useState('...');

  // Estados para el Oráculo de Amor de Marsella
  const [selectedThree, setSelectedThree] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleDeck = () => {
    setIsShuffling(true);
    setSelectedCardIndex(null);
    
    // Simular un mezclado mágico con retardo
    setTimeout(() => {
      const shuffled = [...ARCANOS].sort(() => 0.5 - Math.random());
      setSelectedThree(shuffled.slice(0, 3));
      setIsShuffling(false);
    }, 850);
  };

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

    // Inicializar el oráculo de amor
    shuffleDeck();
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

        {/* Interactive Feature: Oráculo de Amor de las Cartas de Marsella */}
        <div className="w-full mt-8 bg-gradient-to-br from-purple-950/85 via-indigo-950/85 to-slate-950/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-pink-500/30 text-center shadow-2xl relative overflow-hidden flex flex-col items-center">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 p-3 opacity-15"><Star className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse text-amber-300" /></div>
          <div className="absolute bottom-0 right-0 p-3 opacity-15"><Heart className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse text-pink-500" /></div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 flex items-center justify-center gap-2">
            🃏 Oráculo de Amor de Marsella
          </h3>
          <p className="text-xs sm:text-sm text-pink-200/80 mb-6 max-w-sm">
            Conecta con tu energía amorosa. Elige una de las 3 cartas boca abajo para revelar el tierno consejo de los Arcanos Mayores.
          </p>

          {/* Área de cartas */}
          <div className="w-full flex justify-center items-center gap-3 sm:gap-4 my-2 min-h-[160px] sm:min-h-[200px]">
            {selectedThree.map((card, idx) => {
              const isSelected = selectedCardIndex === idx;
              const isAnySelected = selectedCardIndex !== null;
              const isFlipped = isSelected;
              const IconComponent = card.icon;

              return (
                <div 
                  key={idx}
                  className={`perspective-1000 w-24 sm:w-28 h-36 sm:h-44 transition-all duration-500 ${
                    isShuffling ? 'scale-90 opacity-0 translate-y-4' : 'scale-100 opacity-100'
                  } ${
                    isAnySelected && !isSelected ? 'opacity-40 scale-90 blur-[0.5px] pointer-events-none' : ''
                  }`}
                >
                  <div 
                    onClick={() => {
                      if (selectedCardIndex === null && !isShuffling) {
                        setSelectedCardIndex(idx);
                      }
                    }}
                    className={`preserve-3d relative w-full h-full rounded-2xl cursor-pointer transition-transform duration-700 select-none ${
                      isFlipped ? 'rotate-y-180 shadow-[0_0_25px_rgba(244,63,94,0.4)]' : 'hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] animate-tarot-float'
                    }`}
                    style={{
                      animationDelay: `${idx * 0.4}s`
                    }}
                  >
                    {/* PARTE TRASERA DE LA CARTA (BOCA ABAJO) */}
                    <div className="backface-hidden absolute inset-0 rounded-2xl border-2 border-amber-500/40 card-back-pattern flex flex-col items-center justify-center text-amber-400/90 shadow-lg p-2">
                      <div className="w-full h-full border border-amber-500/20 rounded-xl flex flex-col items-center justify-center relative overflow-hidden bg-slate-950/40">
                        {/* Detalles místicos en las esquinas */}
                        <div className="absolute top-1 left-1 text-[8px] opacity-40 text-amber-300">✦</div>
                        <div className="absolute top-1 right-1 text-[8px] opacity-40 text-amber-300">✦</div>
                        <div className="absolute bottom-1 left-1 text-[8px] opacity-40 text-amber-300">✦</div>
                        <div className="absolute bottom-1 right-1 text-[8px] opacity-40 text-amber-300">✦</div>
                        
                        <div className="relative p-2 rounded-full border border-amber-500/20 bg-slate-900/60 shadow-inner">
                          <Moon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div className="absolute inset-x-0 bottom-2 text-center">
                          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-amber-500/80">Amor</span>
                        </div>
                      </div>
                    </div>

                    {/* PARTE DELANTERA DE LA CARTA (REVELADA) */}
                    <div className={`backface-hidden rotate-y-180 absolute inset-0 rounded-2xl border-2 border-amber-400 bg-gradient-to-b ${card.color} flex flex-col items-center justify-between p-2 sm:p-3 text-white shadow-2xl`}>
                      {/* Número Romano */}
                      <span className="text-[10px] sm:text-xs font-serif font-bold tracking-widest text-amber-200 bg-black/30 px-2 py-0.5 rounded-full border border-white/5">
                        {card.roman}
                      </span>
                      
                      {/* Icono Central */}
                      <div className="p-2 bg-white/10 rounded-full border border-white/20 shadow-inner my-1">
                        {IconComponent && <IconComponent className="w-7 h-7 sm:w-9 sm:h-9 text-amber-200 animate-pulse" />}
                      </div>

                      {/* Nombre del Arcano */}
                      <div className="w-full text-center bg-black/30 py-1 rounded-lg border border-white/5">
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wide uppercase block text-amber-200 truncate px-0.5">
                          {card.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detalles del mensaje amoroso */}
          <div className="w-full mt-4 min-h-[90px] flex items-center justify-center">
            {isShuffling ? (
              <div className="flex flex-col items-center gap-2 py-4">
                <RefreshCw className="w-6 h-6 text-pink-400 animate-spin" />
                <p className="text-xs text-pink-200/60 italic">Barajando el destino amoroso...</p>
              </div>
            ) : selectedCardIndex !== null ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 w-full bg-white/5 p-4 rounded-2xl border border-pink-500/20 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10"><Heart className="w-12 h-12 text-pink-500 fill-pink-500" /></div>
                
                <h4 className="text-xs sm:text-sm font-bold text-pink-300 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-300" /> Consejo de {selectedThree[selectedCardIndex]?.name} 💖
                </h4>
                <blockquote className="text-sm sm:text-base text-pink-100 font-medium leading-relaxed italic border-l-2 border-pink-400 pl-3">
                  "{selectedThree[selectedCardIndex]?.message}"
                </blockquote>
                
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={shuffleDeck}
                    className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-bold bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-amber-300/30 transition-all cursor-pointer"
                  >
                    <Shuffle className="w-3.5 h-3.5" /> Barajar de nuevo
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-slate-400 italic py-4 animate-pulse">
                👉 Presiona una carta para revelar la voz de tu alma...
              </p>
            )}
          </div>
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