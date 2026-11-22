import React, { useState, useEffect } from 'react';

// --- ÍCONOS SVG (Compatibles sin dependencias externas) ---
// Using custom SVG icons to avoid external library dependencies
const Icon = ({ children, size = 24, className = '', fill = 'none', strokeWidth = 2, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const Play = (props) => <Icon {...props}><polygon points="5 3 19 12 5 21 5 3" /></Icon>;
const Pause = (props) => <Icon {...props}><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></Icon>;
const RotateCcw = (props) => <Icon {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></Icon>;
const Check = (props) => <Icon {...props}><polyline points="20 6 9 17 4 12" /></Icon>;
const X = (props) => <Icon {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>;
const Brain = (props) => <Icon {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></Icon>;
const LogOut = (props) => <Icon {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></Icon>;
const BookOpen = (props) => <Icon {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></Icon>;
const Dumbbell = (props) => <Icon {...props}><path d="M14.4 14.4 9.6 9.6" /><path d="M18.65 21.35a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l.71-.71a2 2 0 0 1 2.83 0l7.17 7.17a2 2 0 0 1 0 2.83z" /><path d="m2.65 9.35 7.17 7.17" /><path d="m22 2-7.17 7.17" /><path d="M11 11a2 2 0 0 1-2.83 0l-4.24-4.24a2 2 0 0 1 0-2.83l1.41-1.41a2 2 0 0 1 2.83 0l4.24 4.24a2 2 0 0 1 0 2.83z" /><path d="M4 12v3" /><path d="M9 17h3" /><path d="M15 7h3" /><path d="M12 4v3" /></Icon>;

// --- DATOS DE PRUEBA (JSON Interno) ---
// Contains vocabulary words for the game
const ALL_DECKS = {
  'expresiones_tiempo': [
    { id: 1, es: 'Ayer', en: 'Yesterday', verbEs: 'ayer', verbEn: 'yesterday', emoji: '⏪' },
    { id: 2, es: 'Anteayer', en: 'The day before yesterday', verbEs: 'anteayer', verbEn: 'day before yesterday', emoji: '⏮️' },
    { id: 3, es: 'Anoche', en: 'Last night', verbEs: 'anoche', verbEn: 'last night', emoji: '🌙' },
    { id: 4, es: 'Esta mañana', en: 'This morning', verbEs: 'esta mañana', verbEn: 'this morning', emoji: '🌅' },
    { id: 5, es: 'Ayer por la tarde', en: 'Yesterday afternoon', verbEs: 'ayer por la tarde', verbEn: 'yesterday afternoon', emoji: '🌇' },
    { id: 6, es: 'En la noche', en: 'At night', verbEs: 'en la noche', verbEn: 'at night', emoji: '🌃' },
    { id: 7, es: 'La semana pasada', en: 'Last week', verbEs: 'la semana pasada', verbEn: 'last week', emoji: '📅' },
    { id: 8, es: 'La semana antepasada', en: 'The week before last', verbEs: 'la semana antepasada', verbEn: 'week before last', emoji: '🗓️' },
    { id: 9, es: 'El fin de semana pasado', en: 'Last weekend', verbEs: 'el fin de semana pasado', verbEn: 'last weekend', emoji: '🏕️' },
    { id: 10, es: 'El mes pasado', en: 'Last month', verbEs: 'el mes pasado', verbEn: 'last month', emoji: '📆' },
    { id: 11, es: 'El año pasado', en: 'Last year', verbEs: 'el año pasado', verbEn: 'last year', emoji: '🎆' },
    { id: 12, es: 'Hace dos días', en: 'Two days ago', verbEs: 'hace dos días', verbEn: 'two days ago', emoji: '2️⃣' },
    { id: 13, es: 'En 1998', en: 'In 1998', verbEs: 'en 1998', verbEn: 'in 1998', emoji: '📼' },
    { id: 14, es: 'A los 18 años', en: 'At 18 years old', verbEs: 'a los 18 años', verbEn: 'at 18 years old', emoji: '🎂' }
  ]
};

// --- COMPONENTE DE MINI JUEGOS (POP-UP) ---
// Handles the interactive mini-games after learning words
const MiniGameModal = ({ miniGame, onComplete }) => {
  const [inputs, setInputs] = useState(miniGame.cards.map(() => ''));
  const [errors, setErrors] = useState(miniGame.cards.map(() => false));
  const [step, setStep] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [shake, setShake] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  // Reset state when mini-game data changes
  useEffect(() => {
    setInputs(miniGame.cards.map(() => ''));
    setErrors(miniGame.cards.map(() => false));
    setStep(0);
    setGuessed([]);
    setIsReviewing(false);
  }, [miniGame]);

  // Validation for text-based games (Anagram, Missing Letters)
  const verifyTextGames = () => {
    let hasError = false;
    const newErrors = inputs.map((inp, idx) => {
      const normalize = (str) => {
        const charMap = { 'á':'a', 'é':'e', 'í':'i', 'ó':'o', 'ú':'u', 'ü':'u' };
        let s = str.toLowerCase();
        s = s.replace(/[áéíóúü]/g, m => charMap[m]);
        return s.split(/[\s/]+/).filter(Boolean).sort().join('');
      };
      const isWrong = normalize(inp) !== normalize(miniGame.cards[idx].verbEs);
      
      if (isWrong) hasError = true;
      return isWrong;
    });
    setErrors(newErrors);
    if (!hasError) onComplete();
  };

  const handleInputChange = (idx, val) => {
    const newInputs = [...inputs];
    newInputs[idx] = val;
    setInputs(newInputs);
    
    const newErrors = [...errors];
    newErrors[idx] = false;
    setErrors(newErrors);
  };

  // Handles True/False logic
  const handleTF = (guess) => {
    if (guess === miniGame.data[step].isTrue) {
      if (step + 1 >= miniGame.cards.length) onComplete();
      else setStep(step + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  const normalizeChar = (c) => {
    const map = { 'á':'a', 'é':'e', 'í':'i', 'ó':'o', 'ú':'u', 'ü':'u' };
    return map[c] || c;
  };

  // Keyboard handling for hangman game
  const handleKeyClick = (key) => {
    if (guessed.includes(key)) return;
    const newGuessed = [...guessed, key];
    setGuessed(newGuessed);

    const wordChars = miniGame.cards[step].verbEs.toLowerCase().split('');
    const requiredChars = wordChars.filter(c => c !== ' ' && c !== '/').map(normalizeChar);
    const isWordComplete = requiredChars.every(c => newGuessed.includes(c));

    if (isWordComplete) {
      setTimeout(() => {
        if (step + 1 >= miniGame.cards.length) onComplete();
        else {
          setStep(step + 1);
          setGuessed([]);
        }
      }, 500);
    }
  };

  // RENDERIZADOS ESPECÍFICOS POR JUEGO
  const renderAnagramGame = () => (
    <div className="w-full flex flex-col gap-4">
      <p className="text-slate-400 mb-2 text-center text-sm md:text-base">Ordena las letras para formar la <span className="text-indigo-400 font-bold">palabra</span> principal.</p>
      {miniGame.cards.map((card, idx) => (
        <div key={card.id} className="flex flex-col gap-2">
          <div className="text-lg md:text-xl font-bold tracking-widest text-indigo-400 text-center uppercase">
            {miniGame.data[idx].scrambled}
          </div>
          <input 
            type="text"
            className={`w-full bg-slate-800 border-2 ${errors[idx] ? 'border-red-500' : 'border-slate-700 focus:border-indigo-500'} text-white px-4 py-3 rounded-xl text-center text-base md:text-lg outline-none transition-colors`}
            placeholder={`Escribe la palabra "${card.en}" en español`}
            value={inputs[idx]}
            onChange={(e) => handleInputChange(idx, e.target.value)}
          />
        </div>
      ))}
      <button onClick={verifyTextGames} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-bold text-white transition-colors">
        Finished
      </button>
    </div>
  );

  const renderMissingGame = () => {
    const maskWord = (text) => {
      if (text.length <= 2) return text;
      return `${text[0]} ${'_ '.repeat(text.length - 2).trim()} ${text[text.length - 1]}`;
    };

    return (
      <div className="w-full flex flex-col gap-4">
        <p className="text-slate-400 mb-2 text-center text-sm md:text-base">Completa la <span className="text-blue-400 font-bold">expresión en español</span> con las letras faltantes.</p>
        {miniGame.cards.map((card, idx) => (
          <div key={card.id} className="flex flex-col gap-2">
            <div className="text-sm text-slate-500 text-center mb-1">({card.en})</div>
            <div className="text-lg md:text-xl font-bold tracking-[0.3em] text-blue-400 text-center uppercase">
              {maskWord(card.verbEs)}
            </div>
            <input 
              type="text"
              className={`w-full bg-slate-800 border-2 ${errors[idx] ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'} text-white px-4 py-3 rounded-xl text-center text-base md:text-lg outline-none transition-colors`}
              placeholder="Escribe la expresión completa..."
              value={inputs[idx]}
              onChange={(e) => handleInputChange(idx, e.target.value)}
            />
          </div>
        ))}
        <button onClick={verifyTextGames} className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold text-white transition-colors">
          Finished
        </button>
      </div>
    );
  };

  const renderHangmanGame = () => {
    const currentCard = miniGame.cards[step];
    const word = currentCard.verbEs.toLowerCase();
    const normalizedWord = word.split('').map(normalizeChar).join('');
    const keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m'];

    return (
      <div className="w-full flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-slate-400 mb-1 text-sm md:text-base">Teclea las letras para descubrir la expresión en español. ({step + 1}/{miniGame.cards.length})</p>
          <p className="text-lg md:text-xl font-bold text-indigo-400">Pista: {currentCard.verbEn}</p>
        </div>
        
        <div className="flex gap-1 md:gap-2 justify-center flex-wrap mb-4">
          {word.split('').map((char, i) => {
            if (char === ' ' || char === '/') {
               return <span key={i} className="w-2 md:w-4 h-10 inline-block"></span>; // Espacio entre palabras
            }
            const isGuessed = guessed.includes(normalizeChar(char));
            return (
              <span key={i} className="border-b-4 border-slate-500 w-6 md:w-8 h-10 flex items-center justify-center text-2xl md:text-3xl font-bold uppercase text-white">
                {isGuessed ? char : ''}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-1 md:gap-2 max-w-sm">
          {keys.map(key => (
            <button 
              key={key} 
              disabled={guessed.includes(key)}
              onClick={() => handleKeyClick(key)}
              className={`w-8 h-10 md:w-10 md:h-12 rounded font-bold uppercase text-base md:text-lg transition-all ${
                guessed.includes(key) 
                  ? (normalizedWord.includes(key) ? 'bg-green-600/50 text-green-200' : 'bg-slate-800 text-slate-600')
                  : 'bg-slate-700 hover:bg-slate-600 text-white active:scale-95'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderTrueFalseGame = () => {
    const currentQ = miniGame.data[step];
    const currentCard = miniGame.cards[step]; 
    
    return (
      <div className={`w-full flex flex-col items-center gap-6 transition-transform ${shake ? 'translate-x-[-10px] sm:translate-x-[10px] duration-100' : ''}`}>
        <p className="text-slate-400 text-center text-sm md:text-base">¿Es correcta esta expresión? ({step + 1}/{miniGame.cards.length})</p>
        
        <div className="bg-slate-800 p-6 rounded-2xl w-full text-center border border-slate-700">
          <div className="text-slate-400 text-xs md:text-sm mb-1 uppercase tracking-wider">En Inglés</div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-4">{currentCard.verbEn}</div>
          
          <div className="text-slate-400 text-xs md:text-sm mb-1 uppercase tracking-wider mt-6">En Español</div>
          <div className="text-3xl md:text-4xl font-bold text-indigo-400">{currentQ.displayedEs}</div>
        </div>

        <div className="flex w-full gap-4 mt-2">
          <button 
            onClick={() => handleTF(true)}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 md:py-4 rounded-xl text-lg md:text-xl transition-all active:scale-95 shadow-lg shadow-green-900/20"
          >
            Cierto
          </button>
          <button 
            onClick={() => handleTF(false)}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-3 md:py-4 rounded-xl text-lg md:text-xl transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            Falso
          </button>
        </div>
      </div>
    );
  };

  const gameTitles = {
    'anagram': '🧩 Anagrama',
    'hangman': '⌨️ El Ahorcado',
    'truefalse': '⚖️ Cierto o Falso',
    'missing': '🔤 Letras Faltantes'
  };

  if (isReviewing) {
    return (
      <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
          
          <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
              <BookOpen size={24} className="text-blue-400 md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center shrink-0">Repaso Rápido</h3>
            <p className="text-slate-400 mb-6 text-center text-xs md:text-sm shrink-0">Tómate un momento para recordar estas palabras:</p>
            
            <div className="w-full flex flex-col gap-3">
              {miniGame.cards.map(c => (
                <div key={c.id} className="bg-slate-800 border border-slate-700 p-3 md:p-4 rounded-2xl flex items-center gap-4 shrink-0">
                  <div className="text-3xl md:text-4xl drop-shadow-md">{c.emoji}</div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-lg md:text-xl font-bold text-white lowercase truncate">{c.es}</div>
                    <div className="text-indigo-300 text-sm md:text-base font-medium lowercase truncate">{c.en}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full shrink-0 border-t border-slate-800 p-4 bg-slate-900">
            <button 
              onClick={() => setIsReviewing(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 py-3 md:py-4 rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg shadow-blue-900/20 text-sm md:text-base"
            >
              Regresar al ejercicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 border border-indigo-500/30">
            <Dumbbell size={24} className="text-indigo-400 md:w-8 md:h-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center shrink-0">
            {gameTitles[miniGame.type]}
          </h3>
          
          <div className="w-full flex-1">
            {miniGame.type === 'anagram' && renderAnagramGame()}
            {miniGame.type === 'missing' && renderMissingGame()}
            {miniGame.type === 'hangman' && renderHangmanGame()}
            {miniGame.type === 'truefalse' && renderTrueFalseGame()}
          </div>
        </div>

        <div className="w-full shrink-0 bg-slate-900 p-4 border-t border-slate-800 flex justify-end">
          <button 
            onClick={() => setIsReviewing(true)}
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-xs md:text-sm font-semibold group"
          >
            <span>See the words again</span>
            <RotateCcw size={16} className="group-hover:-rotate-180 transition-transform duration-500 md:w-[18px] md:h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [currentCategory, setCurrentCategory] = useState('expresiones_tiempo');
  const [appState, setAppState] = useState('welcome'); // welcome | playing
  const [deck, setDeck] = useState([...ALL_DECKS['expresiones_tiempo']]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);
  
  // Game states for mini-games trigger logic
  const [recentLearnedCards, setRecentLearnedCards] = useState([]);
  const [allLearnedCards, setAllLearnedCards] = useState([]);
  const [activeMiniGame, setActiveMiniGame] = useState(null);

  const [stats, setStats] = useState({
    pending: ALL_DECKS['expresiones_tiempo'].length,
    notLearned: 0,
    learned: 0
  });

  const startGame = () => {
    resetGame();
    setAppState('playing');
  };

  const resetGame = () => {
    const selectedDeck = [...ALL_DECKS[currentCategory]];
    setDeck(selectedDeck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setRecentLearnedCards([]);
    setAllLearnedCards([]);
    setActiveMiniGame(null);
    setStats({
      pending: selectedDeck.length,
      notLearned: 0,
      learned: 0
    });
  };

  const exitToWelcome = () => {
    setShowPauseModal(false);
    setAppState('welcome');
  };

  // Triggers a random mini-game every 5 cards learned
  const triggerMiniGame = (cards, learnedPool) => {
    const types = ['anagram', 'hangman', 'missing'];
    if (learnedPool.length > 3) {
      types.push('truefalse');
    }
    const type = types[Math.floor(Math.random() * types.length)];

    const data = type === 'anagram' 
      ? cards.map(c => {
          let scrambled = c.verbEs;
          let tries = 0;
          while (scrambled === c.verbEs && tries < 10) {
            scrambled = c.verbEs.split('').sort(() => Math.random() - 0.5).join('');
            tries++;
          }
          return { scrambled };
        })
      : type === 'truefalse'
      ? cards.map(c => {
          const isTrue = Math.random() > 0.5;
          let displayedEs = c.verbEs;
          if (!isTrue) {
            const otherCards = learnedPool.filter(o => o.id !== c.id);
            if (otherCards.length > 0) {
              displayedEs = otherCards[Math.floor(Math.random() * otherCards.length)].verbEs;
            }
          }
          return { isTrue: displayedEs === c.verbEs ? true : isTrue, displayedEs }; 
        })
      : []; 

    setActiveMiniGame({ type, cards, data });
  };

  const handleLearned = (e) => {
    e.stopPropagation();
    if (deck.length === 0) return;

    setIsFlipped(false);
    
    // Simulate delay for flip back transition
    setTimeout(() => {
      const newDeck = [...deck];
      const learnedCard = newDeck.splice(currentIndex, 1)[0];
      const newRecent = [...recentLearnedCards, learnedCard];
      const newAllLearned = [...allLearnedCards, learnedCard];
      
      setAllLearnedCards(newAllLearned);
      setStats(prev => ({
        ...prev,
        learned: prev.learned + 1,
        pending: prev.pending - 1
      }));

      if (newRecent.length >= 5 || newDeck.length === 0) {
        setDeck(newDeck);
        setCurrentIndex(0);
        if(newRecent.length > 0) triggerMiniGame(newRecent, newAllLearned);
        setRecentLearnedCards([]);
      } else {
        setDeck(newDeck);
        setRecentLearnedCards(newRecent);
        if (currentIndex >= newDeck.length) {
          setCurrentIndex(0);
        }
      }
    }, 200);
  };

  const handleNotLearned = (e) => {
    e.stopPropagation();
    if (deck.length === 0) return;

    setIsFlipped(false);
    
    // Simulate delay for flip back transition
    setTimeout(() => {
      const newDeck = [...deck];
      const currentCard = newDeck.splice(currentIndex, 1)[0];
      newDeck.push(currentCard); // Move to the end of the deck
      
      setDeck(newDeck);
      setStats(prev => ({
        ...prev,
        notLearned: prev.notLearned + 1
      }));

      if (currentIndex >= newDeck.length) {
        setCurrentIndex(0);
      }
    }, 200);
  };

  if (appState === 'welcome') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center shadow-2xl transition-all duration-500 hover:shadow-blue-900/20">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600/10 rounded-full flex items-center justify-center mb-6 md:mb-8 border-4 border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
            <BookOpen size={48} className="text-blue-500 md:w-[64px] md:h-[64px]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Vocabulario
          </h1>
          <button 
            onClick={startGame}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/30 text-base md:text-lg"
          >
            <Play fill="currentColor" size={20} className="md:w-[24px] md:h-[24px]" />
            Iniciar
          </button>
        </div>
      </div>
    );
  }

  const currentCard = deck[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col items-center p-4 md:p-8">
      
      {/* Header and Controls */}
      <div className="w-full max-w-4xl flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="text-blue-500" size={24} />
            <h2 className="font-bold text-lg md:text-xl hidden sm:block">Flashcards</h2>
          </div>
          <div className="flex gap-2 md:gap-3">
            <button 
              onClick={resetGame}
              className="p-2 md:p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors border border-slate-700 hover:border-slate-600 flex items-center gap-2"
              title="Reiniciar"
            >
              <RotateCcw size={18} className="md:w-[20px] md:h-[20px]" />
              <span className="hidden sm:inline font-medium text-xs md:text-sm">Reiniciar</span>
            </button>
            <button 
              onClick={() => setShowPauseModal(true)}
              className="p-2 md:p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors border border-slate-700 hover:border-slate-600"
              title="Pausa"
            >
              <Pause size={18} fill="currentColor" className="md:w-[20px] md:h-[20px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 bg-slate-900 p-3 md:p-4 rounded-2xl border border-slate-800 shadow-sm">
          <div className="flex-1 relative">
            <select 
              value={currentCategory}
              onChange={(e) => setCurrentCategory(e.target.value)}
              className="w-full appearance-none bg-slate-800 border border-slate-700 text-slate-200 py-2.5 md:py-3 px-3 md:px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer font-medium text-sm md:text-base"
            >
              <option value="expresiones_tiempo">Expresiones de Tiempo</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button 
            onClick={resetGame}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 whitespace-nowrap text-sm md:text-base"
          >
            Empezar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="w-full max-w-4xl grid grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-10">
        <div className="bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stats.pending}</span>
          <span className="text-[10px] md:text-sm text-slate-400 text-center font-medium uppercase tracking-wider">Pendientes</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <X size={16} className="text-red-500 hidden sm:block md:w-[20px] md:h-[20px]" />
            <span className="text-2xl md:text-3xl font-bold text-red-500">{stats.notLearned}</span>
          </div>
          <span className="text-[10px] md:text-sm text-slate-400 text-center font-medium uppercase tracking-wider">No aprendí</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="flex items-center gap-1 md:gap-2 mb-1">
            <Check size={16} className="text-green-500 hidden sm:block md:w-[20px] md:h-[20px]" />
            <span className="text-2xl md:text-3xl font-bold text-green-500">{stats.learned}</span>
          </div>
          <span className="text-[10px] md:text-sm text-slate-400 text-center font-medium uppercase tracking-wider">Aprendidas</span>
        </div>
      </div>

      {deck.length > 0 ? (
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
          
          {/* Flashcard Area */}
          <div 
            className="flex-1 w-full max-w-xl mx-auto h-[300px] md:h-[400px] cursor-pointer" 
            style={{ perspective: '1200px' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div 
              className="relative w-full h-full transition-transform duration-500 ease-out shadow-2xl rounded-3xl"
              style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* Front of Card */}
              <div 
                className="absolute w-full h-full bg-slate-800 border-2 border-slate-700 rounded-3xl flex flex-col items-center justify-center p-6 md:p-8 shadow-inner hover:border-slate-600 transition-colors"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {currentCard.type && (
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col items-end gap-1">
                    <span className={`px-2 py-1 md:px-3 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full ${currentCard.type === 'regular' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                      {currentCard.type}
                    </span>
                    {currentCard.type === 'irregular' && currentCard.change && (
                      <span className="text-[10px] md:text-xs font-medium text-red-300 bg-red-950/60 px-2 py-1 rounded-md border border-red-900/50">
                        {currentCard.change}
                      </span>
                    )}
                  </div>
                )}

                <div className="text-5xl md:text-7xl mb-4 md:mb-6 drop-shadow-lg">{currentCard.emoji}</div>
                <h3 className="text-2xl md:text-4xl font-bold text-white text-center lowercase tracking-tight px-4 leading-tight">
                  {currentCard.hl !== undefined ? (
                    <>
                      {currentCard.es.substring(0, currentCard.hl)}
                      <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">{currentCard.es[currentCard.hl]}</span>
                      {currentCard.es.substring(currentCard.hl + 1)}
                    </>
                  ) : (
                    currentCard.es
                  )}
                </h3>
                <span className="absolute bottom-4 md:bottom-6 text-slate-500 text-xs md:text-sm font-medium animate-pulse">
                  click to see the meaning
                </span>
              </div>

              {/* Back of Card */}
              <div 
                className="absolute w-full h-full bg-indigo-900 border-2 border-indigo-700 rounded-3xl flex flex-col items-center justify-center p-6 md:p-8 shadow-inner"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="text-3xl md:text-4xl mb-4 opacity-50">{currentCard.emoji}</div>
                <p className="text-slate-300 text-sm md:text-lg uppercase tracking-widest mb-2 font-semibold">Traducción</p>
                <h3 className="text-2xl md:text-4xl font-bold text-white text-center lowercase px-4 leading-tight">
                  {currentCard.en}
                </h3>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 justify-center">
            <button 
              onClick={handleLearned}
              className="flex-1 md:flex-none flex flex-col items-center justify-center gap-2 md:gap-3 bg-slate-900 hover:bg-green-900/40 border-2 border-slate-800 hover:border-green-500/50 text-slate-300 hover:text-green-400 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 group shadow-lg"
            >
              <div className="bg-slate-800 group-hover:bg-green-500/20 p-3 md:p-4 rounded-full transition-colors">
                <Check size={28} className="text-slate-400 group-hover:text-green-500 md:w-[36px] md:h-[36px]" strokeWidth={3} />
              </div>
              <span className="text-xs md:text-sm font-bold text-center leading-tight">I learned<br/>the word</span>
            </button>
            
            <button 
              onClick={handleNotLearned}
              className="flex-1 md:flex-none flex flex-col items-center justify-center gap-2 md:gap-3 bg-slate-900 hover:bg-red-900/40 border-2 border-slate-800 hover:border-red-500/50 text-slate-300 hover:text-red-400 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 group shadow-lg"
            >
              <div className="bg-slate-800 group-hover:bg-red-500/20 p-3 md:p-4 rounded-full transition-colors">
                <X size={28} className="text-slate-400 group-hover:text-red-500 md:w-[36px] md:h-[36px]" strokeWidth={3} />
              </div>
              <span className="text-xs md:text-sm font-bold text-center leading-tight">I didn't learn<br/>the word</span>
            </button>
          </div>
        </div>
      ) : (
        /* Completion State */
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center mt-4 mx-4 md:mx-0">
          <div className="text-5xl md:text-6xl mb-4 md:mb-6">🎉</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">¡Sesión completada!</h2>
          <p className="text-slate-400 mb-6 md:mb-8 text-sm md:text-lg">
            Has repasado todas las palabras de esta baraja.
          </p>
          <button 
            onClick={resetGame}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 md:py-3 px-6 md:px-8 rounded-xl transition-colors shadow-lg text-sm md:text-base"
          >
            Volver a estudiar
          </button>
        </div>
      )}

      {/* Renders dynamic mini-games modal on progression */}
      {activeMiniGame && (
        <MiniGameModal 
          miniGame={activeMiniGame} 
          onComplete={() => setActiveMiniGame(null)} 
        />
      )}

      {/* Pause Menu Modal */}
      {showPauseModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 md:mb-6 text-slate-300">
              <Pause size={24} fill="currentColor" className="md:w-[32px] md:h-[32px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Estudio en pausa</h3>
            <p className="text-slate-400 mb-6 md:mb-8 text-center text-sm md:text-base">
              ¿Deseas continuar estudiando o salir a la pantalla principal?
            </p>
            <div className="w-full flex flex-col gap-3">
              <button 
                onClick={() => setShowPauseModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 md:py-4 rounded-xl transition-colors text-sm md:text-base"
              >
                Regresar al estudio
              </button>
              <button 
                onClick={exitToWelcome}
                className="w-full bg-slate-800 hover:bg-red-900/30 text-slate-300 hover:text-red-400 font-semibold py-3 md:py-4 rounded-xl transition-colors border border-slate-700 hover:border-red-500/30 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <LogOut size={18} className="md:w-[20px] md:h-[20px]" />
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}