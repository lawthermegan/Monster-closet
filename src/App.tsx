import { useState, useEffect } from 'react';
import { Door } from './components/Door';
import { Monster } from './components/Monsters';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [monsters, setMonsters] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate an array of exactly 34 monsters (2 of each of the 17 types)
      const newMonsters = Array.from({ length: 34 }, (_, i) => i);
      setMonsters(newMonsters);
    } else {
      setMonsters([]);
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center relative selection:bg-transparent">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>

      {/* Monsters Container */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <AnimatePresence>
          {monsters.map((index) => (
            <Monster key={index} index={index} delay={index * 0.05} />
          ))}
        </AnimatePresence>
      </div>

      {/* Door Container */}
      <div className="z-20">
        <Door isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      
      {/* Instructions */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-10 text-slate-400 font-mono tracking-widest uppercase text-sm"
          >
            Click the door
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
