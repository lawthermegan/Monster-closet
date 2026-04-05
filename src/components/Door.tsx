import { motion } from 'motion/react';

interface DoorProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Door = ({ isOpen, onClick }: DoorProps) => {
  return (
    <div className="relative w-64 h-96 perspective-[1000px] cursor-pointer group" onClick={onClick}>
      {/* Door Frame */}
      <div className="absolute inset-0 bg-stone-800 rounded-t-full shadow-2xl border-8 border-stone-900 overflow-hidden">
        {/* The void behind the door */}
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className={`w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-600 via-purple-900 to-black transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}></div>
        </div>
      </div>

      {/* The Door Itself */}
      <motion.div
        className="absolute inset-0 bg-amber-800 rounded-t-full border-4 border-amber-950 origin-left flex flex-col items-center pt-10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
        initial={false}
        animate={{ 
          rotateY: isOpen ? -105 : 0,
          boxShadow: isOpen ? "10px 0 30px rgba(0,0,0,0.5)" : "0 0 0 rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 40, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Door Panels */}
        <div className="w-3/4 h-1/3 border-4 border-amber-900/50 rounded-t-full mb-8 bg-amber-700/30"></div>
        <div className="w-3/4 h-1/3 border-4 border-amber-900/50 rounded-sm bg-amber-700/30"></div>
        
        {/* Doorknob */}
        <div className="absolute right-4 top-1/2 w-6 h-6 bg-yellow-600 rounded-full shadow-lg border-2 border-yellow-700 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-800 rounded-full"></div>
        </div>
        
        {/* Warning Sign */}
        {!isOpen && (
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold px-4 py-2 border-2 border-red-900 rounded shadow-md rotate-[-10deg]"
            animate={{ rotate: [-10, -8, -12, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            DO NOT OPEN
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
