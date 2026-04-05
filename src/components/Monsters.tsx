import { motion } from 'motion/react';
import { useState } from 'react';
import { playMonsterSound } from '../utils/audio';

const Toasterpus = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc"/>
        <stop offset="50%" stopColor="#94a3b8"/>
        <stop offset="100%" stopColor="#475569"/>
      </linearGradient>
      <radialGradient id="pinkTentacle" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f472b6"/>
        <stop offset="100%" stopColor="#be185d"/>
      </radialGradient>
    </defs>
    {/* Tentacles */}
    <path d="M 30 70 Q 20 90 10 80" fill="none" stroke="url(#pinkTentacle)" strokeWidth="8" strokeLinecap="round" />
    <path d="M 45 70 Q 40 100 30 95" fill="none" stroke="url(#pinkTentacle)" strokeWidth="8" strokeLinecap="round" />
    <path d="M 55 70 Q 60 100 70 95" fill="none" stroke="url(#pinkTentacle)" strokeWidth="8" strokeLinecap="round" />
    <path d="M 70 70 Q 80 90 90 80" fill="none" stroke="url(#pinkTentacle)" strokeWidth="8" strokeLinecap="round" />
    
    {/* Toaster Body */}
    <rect x="20" y="30" width="60" height="45" rx="10" fill="url(#chrome)" stroke="#334155" strokeWidth="2" />
    <rect x="25" y="25" width="20" height="5" rx="2" fill="#1e293b" />
    <rect x="55" y="25" width="20" height="5" rx="2" fill="#1e293b" />
    
    {/* Eyes */}
    <circle cx="35" cy="50" r="8" fill="white" />
    <circle cx="65" cy="50" r="8" fill="white" />
    <circle cx="38" cy="50" r="3" fill="black" />
    <circle cx="62" cy="50" r="3" fill="black" />
    
    {/* Mouth */}
    <path d="M 45 65 Q 50 70 55 65" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const Teaspider = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="ceramic" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#bfdbfe"/>
        <stop offset="100%" stopColor="#1e3a8a"/>
      </radialGradient>
      <linearGradient id="spiderLeg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155"/>
        <stop offset="100%" stopColor="#0f172a"/>
      </linearGradient>
    </defs>
    {/* Spider Legs */}
    <path d="M 30 60 Q 10 50 5 70" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 40 65 Q 20 70 15 90" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 50 65 Q 50 80 45 95" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 50 65 Q 50 80 55 95" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 60 65 Q 80 70 85 90" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 70 60 Q 90 50 95 70" fill="none" stroke="url(#spiderLeg)" strokeWidth="5" strokeLinecap="round" />
    
    {/* Teapot Spout & Handle */}
    <path d="M 25 45 Q 10 40 15 30" fill="none" stroke="url(#ceramic)" strokeWidth="10" strokeLinecap="round" />
    <path d="M 75 40 Q 90 40 85 55 Q 80 60 75 55" fill="none" stroke="url(#ceramic)" strokeWidth="8" strokeLinecap="round" />
    
    {/* Teapot Body */}
    <circle cx="50" cy="50" r="25" fill="url(#ceramic)" />
    <path d="M 35 28 Q 50 15 65 28 Z" fill="url(#ceramic)" />
    <circle cx="50" cy="20" r="5" fill="#1e3a8a" />
    
    {/* Giant Eye */}
    <circle cx="50" cy="50" r="14" fill="white" stroke="#1e3a8a" strokeWidth="1" />
    <circle cx="50" cy="50" r="6" fill="#65a30d" />
    <circle cx="50" cy="50" r="3" fill="black" />
    <circle cx="48" cy="48" r="1.5" fill="white" />
  </svg>
);

const Lampbat = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fef08a"/>
        <stop offset="100%" stopColor="#a16207"/>
      </radialGradient>
      <linearGradient id="batWing" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9333ea"/>
        <stop offset="100%" stopColor="#4c1d95"/>
      </linearGradient>
      <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#b45309"/>
        <stop offset="50%" stopColor="#d97706"/>
        <stop offset="100%" stopColor="#78350f"/>
      </linearGradient>
    </defs>
    {/* Bat Wings */}
    <path d="M 35 40 Q 15 20 5 40 Q 15 50 25 45 Q 20 60 35 50" fill="url(#batWing)" stroke="#3b0764" strokeWidth="2" />
    <path d="M 65 40 Q 85 20 95 40 Q 85 50 75 45 Q 80 60 65 50" fill="url(#batWing)" stroke="#3b0764" strokeWidth="2" />
    
    {/* Lamp Base/Stand */}
    <rect x="47" y="60" width="6" height="30" fill="url(#wood)" />
    <path d="M 35 90 L 65 90 L 60 85 L 40 85 Z" fill="url(#wood)" />
    
    {/* Lampshade Body */}
    <path d="M 30 60 L 40 20 L 60 20 L 70 60 Z" fill="url(#lampGlow)" stroke="#854d0e" strokeWidth="2" />
    
    {/* Face */}
    <circle cx="42" cy="45" r="5" fill="#ef4444" />
    <circle cx="58" cy="45" r="5" fill="#ef4444" />
    <circle cx="43" cy="44" r="1.5" fill="white" />
    <circle cx="59" cy="44" r="1.5" fill="white" />
    <path d="M 45 55 Q 50 58 55 55" fill="none" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
    <polygon points="48,56 50,62 52,56" fill="white" />
  </svg>
);

const Clockfrog = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="frogSkin" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#4ade80"/>
        <stop offset="100%" stopColor="#14532d"/>
      </radialGradient>
      <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde047"/>
        <stop offset="50%" stopColor="#eab308"/>
        <stop offset="100%" stopColor="#854d0e"/>
      </linearGradient>
      <radialGradient id="clockFace" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#e2e8f0"/>
      </radialGradient>
    </defs>
    {/* Frog Legs */}
    <path d="M 30 70 Q 10 60 15 85 L 5 95" fill="none" stroke="url(#frogSkin)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 70 70 Q 90 60 85 85 L 95 95" fill="none" stroke="url(#frogSkin)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 40 80 L 35 95 L 25 95" fill="none" stroke="url(#frogSkin)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 60 80 L 65 95 L 75 95" fill="none" stroke="url(#frogSkin)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Clock Bells */}
    <path d="M 20 30 Q 30 10 40 25 Z" fill="url(#goldBell)" />
    <path d="M 80 30 Q 70 10 60 25 Z" fill="url(#goldBell)" />
    
    {/* Clock Body */}
    <circle cx="50" cy="50" r="28" fill="url(#clockFace)" stroke="url(#goldBell)" strokeWidth="6" />
    
    {/* Face */}
    <circle cx="40" cy="45" r="6" fill="#0f172a" />
    <circle cx="60" cy="45" r="6" fill="#0f172a" />
    <circle cx="42" cy="43" r="2" fill="white" />
    <circle cx="62" cy="43" r="2" fill="white" />
    
    {/* Tongue */}
    <path d="M 45 55 Q 50 80 60 70 Q 70 60 65 85" fill="none" stroke="#db2777" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const SofaMouth = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="sofaFabric" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#c084fc"/>
        <stop offset="50%" stopColor="#9333ea"/>
        <stop offset="100%" stopColor="#581c87"/>
      </linearGradient>
      <radialGradient id="mouthDark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7f1d1d"/>
        <stop offset="100%" stopColor="#450a0a"/>
      </radialGradient>
    </defs>
    {/* Sofa Body */}
    <rect x="10" y="40" width="80" height="40" rx="5" fill="url(#sofaFabric)" stroke="#4c1d95" strokeWidth="2" />
    <rect x="5" y="50" width="15" height="30" rx="5" fill="url(#sofaFabric)" />
    <rect x="80" y="50" width="15" height="30" rx="5" fill="url(#sofaFabric)" />
    <path d="M 15 40 Q 50 20 85 40 Z" fill="url(#sofaFabric)" />
    
    {/* Multiple Eyes */}
    <circle cx="30" cy="30" r="7" fill="white" />
    <circle cx="30" cy="30" r="3" fill="black" />
    <circle cx="50" cy="25" r="9" fill="white" />
    <circle cx="50" cy="25" r="4" fill="black" />
    <circle cx="70" cy="32" r="6" fill="white" />
    <circle cx="70" cy="32" r="2.5" fill="black" />
    
    {/* Giant Mouth */}
    <path d="M 20 55 Q 50 85 80 55" fill="url(#mouthDark)" stroke="#450a0a" strokeWidth="2" />
    <polygon points="25,57 30,67 35,59" fill="#fef08a" />
    <polygon points="40,61 45,72 50,63" fill="#fef08a" />
    <polygon points="55,63 60,72 65,61" fill="#fef08a" />
    <polygon points="70,59 75,67 80,57" fill="#fef08a" />
  </svg>
);

const CarrotFoot = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="carrotBody" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fdba74"/>
        <stop offset="100%" stopColor="#c2410c"/>
      </radialGradient>
      <radialGradient id="foot" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="100%" stopColor="#92400e"/>
      </radialGradient>
      <linearGradient id="feather" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d8b4fe"/>
        <stop offset="100%" stopColor="#7e22ce"/>
      </linearGradient>
    </defs>
    {/* Big Feet */}
    <ellipse cx="35" cy="85" rx="18" ry="10" fill="url(#foot)" />
    <ellipse cx="65" cy="85" rx="18" ry="10" fill="url(#foot)" />
    {/* Carrot Body */}
    <path d="M 30 30 Q 50 95 70 30 Z" fill="url(#carrotBody)" />
    {/* Lines on carrot */}
    <path d="M 35 40 Q 50 45 65 40" fill="none" stroke="#9a3412" strokeWidth="3" strokeLinecap="round" />
    <path d="M 40 55 Q 50 60 60 55" fill="none" stroke="#9a3412" strokeWidth="3" strokeLinecap="round" />
    <path d="M 45 70 Q 50 73 55 70" fill="none" stroke="#9a3412" strokeWidth="3" strokeLinecap="round" />
    {/* Feather */}
    <path d="M 50 30 Q 40 10 60 5 Q 70 15 50 30" fill="url(#feather)" />
    <path d="M 50 30 Q 45 15 60 5" fill="none" stroke="#581c87" strokeWidth="2" />
    {/* Eyes */}
    <circle cx="43" cy="45" r="5" fill="white" />
    <circle cx="57" cy="45" r="5" fill="white" />
    <circle cx="43" cy="45" r="2" fill="black" />
    <circle cx="57" cy="45" r="2" fill="black" />
  </svg>
);

const RocketTV = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="tvBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94a3b8"/>
        <stop offset="100%" stopColor="#334155"/>
      </linearGradient>
      <radialGradient id="tvScreen" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0f2fe"/>
        <stop offset="100%" stopColor="#0284c7"/>
      </radialGradient>
      <radialGradient id="hair" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fbcfe8"/>
        <stop offset="100%" stopColor="#be185d"/>
      </radialGradient>
    </defs>
    {/* Rocket Flames */}
    <path d="M 35 75 L 25 95 L 40 85 L 50 100 L 60 85 L 75 95 L 65 75 Z" fill="#ef4444" />
    <path d="M 40 75 L 35 90 L 45 85 L 50 95 L 55 85 L 65 90 L 60 75 Z" fill="#facc15" />
    {/* Big Hair */}
    <circle cx="35" cy="25" r="16" fill="url(#hair)" />
    <circle cx="50" cy="15" r="20" fill="url(#hair)" />
    <circle cx="65" cy="25" r="16" fill="url(#hair)" />
    {/* TV Body */}
    <rect x="20" y="30" width="60" height="45" rx="5" fill="url(#tvBody)" stroke="#0f172a" strokeWidth="2" />
    <rect x="25" y="35" width="40" height="35" rx="3" fill="url(#tvScreen)" stroke="#0f172a" strokeWidth="2" />
    {/* Knobs */}
    <circle cx="72" cy="45" r="4" fill="#0f172a" />
    <circle cx="72" cy="55" r="4" fill="#0f172a" />
    {/* Face on Screen */}
    <path d="M 35 45 Q 45 55 55 45" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
    <circle cx="35" cy="55" r="4" fill="#0f172a" />
    <circle cx="55" cy="55" r="4" fill="#0f172a" />
    <circle cx="36" cy="54" r="1.5" fill="white" />
    <circle cx="56" cy="54" r="1.5" fill="white" />
  </svg>
);

const DrumstickFish = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="fishBody" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#5eead4"/>
        <stop offset="100%" stopColor="#0f766e"/>
      </radialGradient>
      <radialGradient id="crispyMeat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="100%" stopColor="#92400e"/>
      </radialGradient>
      <linearGradient id="bone" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc"/>
        <stop offset="100%" stopColor="#cbd5e1"/>
      </linearGradient>
    </defs>
    {/* Drumstick Legs */}
    <path d="M 35 60 L 30 85" fill="none" stroke="url(#bone)" strokeWidth="5" />
    <circle cx="26" cy="87" r="4" fill="url(#bone)" />
    <circle cx="34" cy="87" r="4" fill="url(#bone)" />
    <ellipse cx="35" cy="70" rx="8" ry="14" fill="url(#crispyMeat)" />
    
    <path d="M 65 60 L 70 85" fill="none" stroke="url(#bone)" strokeWidth="5" />
    <circle cx="66" cy="87" r="4" fill="url(#bone)" />
    <circle cx="74" cy="87" r="4" fill="url(#bone)" />
    <ellipse cx="65" cy="70" rx="8" ry="14" fill="url(#crispyMeat)" />

    {/* Fish Tail */}
    <path d="M 20 45 L 5 25 L 5 65 Z" fill="url(#fishBody)" />
    {/* Fish Body */}
    <ellipse cx="50" cy="45" rx="35" ry="22" fill="url(#fishBody)" />
    {/* Fish Eye */}
    <circle cx="70" cy="40" r="6" fill="white" />
    <circle cx="72" cy="40" r="2.5" fill="black" />
    <circle cx="73" cy="39" r="1" fill="white" />
    {/* Fish Mouth */}
    <path d="M 82 50 Q 75 55 70 50" fill="none" stroke="#042f2e" strokeWidth="3" strokeLinecap="round" />
    {/* Fin */}
    <path d="M 45 23 Q 55 10 60 23 Z" fill="url(#fishBody)" />
  </svg>
);

const HornedClock = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="horn" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d6d3d1"/>
        <stop offset="100%" stopColor="#44403c"/>
      </linearGradient>
      <radialGradient id="brass" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fef08a"/>
        <stop offset="100%" stopColor="#a16207"/>
      </radialGradient>
    </defs>
    {/* Horns */}
    <path d="M 30 30 Q 10 5 20 5 Q 25 15 40 25 Z" fill="url(#horn)" />
    <path d="M 70 30 Q 90 5 80 5 Q 75 15 60 25 Z" fill="url(#horn)" />
    {/* Clock Body */}
    <circle cx="50" cy="55" r="35" fill="url(#brass)" stroke="#713f12" strokeWidth="4" />
    {/* Clock Hands */}
    <line x1="50" y1="55" x2="50" y2="30" stroke="#451a03" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="55" x2="68" y2="55" stroke="#451a03" strokeWidth="5" strokeLinecap="round" />
    <circle cx="50" cy="55" r="4" fill="#451a03" />
    {/* Eyes */}
    <circle cx="35" cy="45" r="7" fill="white" />
    <circle cx="65" cy="45" r="7" fill="white" />
    <circle cx="35" cy="45" r="3" fill="#dc2626" />
    <circle cx="65" cy="45" r="3" fill="#dc2626" />
    <circle cx="36" cy="44" r="1" fill="white" />
    <circle cx="66" cy="44" r="1" fill="white" />
    {/* Teeth / Mouth */}
    <path d="M 28 65 L 72 65 L 65 82 L 35 82 Z" fill="#450a0a" />
    <polygon points="28,65 33,74 38,65 43,74 48,65 53,74 58,65 63,74 68,65 72,65" fill="#fef08a" />
    <polygon points="35,82 40,73 45,82 50,73 55,82 60,73 65,82" fill="#fef08a" />
  </svg>
);

const ToothbrushArms = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="brushHandle" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6ee7b7"/>
        <stop offset="50%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#047857"/>
      </linearGradient>
      <linearGradient id="bristles" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#94a3b8"/>
      </linearGradient>
    </defs>
    {/* Arms */}
    <path d="M 40 60 Q 20 40 10 60" fill="none" stroke="url(#brushHandle)" strokeWidth="5" strokeLinecap="round" />
    <path d="M 60 60 Q 80 40 90 60" fill="none" stroke="url(#brushHandle)" strokeWidth="5" strokeLinecap="round" />
    {/* Hands */}
    <circle cx="10" cy="60" r="5" fill="#047857" />
    <circle cx="90" cy="60" r="5" fill="#047857" />
    
    {/* Toothbrush Handle */}
    <rect x="38" y="30" width="24" height="65" rx="12" fill="url(#brushHandle)" />
    {/* Bristles */}
    <rect x="33" y="10" width="34" height="25" rx="5" fill="url(#bristles)" />
    <line x1="38" y1="10" x2="38" y2="35" stroke="#cbd5e1" strokeWidth="2" />
    <line x1="44" y1="10" x2="44" y2="35" stroke="#cbd5e1" strokeWidth="2" />
    <line x1="50" y1="10" x2="50" y2="35" stroke="#cbd5e1" strokeWidth="2" />
    <line x1="56" y1="10" x2="56" y2="35" stroke="#cbd5e1" strokeWidth="2" />
    <line x1="62" y1="10" x2="62" y2="35" stroke="#cbd5e1" strokeWidth="2" />
    
    {/* 3 Eyes */}
    <circle cx="42" cy="45" r="4.5" fill="white" />
    <circle cx="50" cy="40" r="4.5" fill="white" />
    <circle cx="58" cy="45" r="4.5" fill="white" />
    <circle cx="42" cy="45" r="2" fill="black" />
    <circle cx="50" cy="40" r="2" fill="black" />
    <circle cx="58" cy="45" r="2" fill="black" />
    <circle cx="41" cy="44" r="0.5" fill="white" />
    <circle cx="49" cy="39" r="0.5" fill="white" />
    <circle cx="57" cy="44" r="0.5" fill="white" />
    
    {/* Mouth */}
    <path d="M 45 55 Q 50 62 55 55" fill="none" stroke="#022c22" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CrabPhone = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="phoneRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ef4444"/>
        <stop offset="100%" stopColor="#991b1b"/>
      </linearGradient>
      <radialGradient id="crabShell" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#f87171"/>
        <stop offset="100%" stopColor="#7f1d1d"/>
      </radialGradient>
    </defs>
    {/* Claws */}
    <path d="M 20 60 Q 5 40 15 25 Q 25 20 30 35" fill="url(#crabShell)" stroke="#7f1d1d" strokeWidth="2" />
    <path d="M 80 60 Q 95 40 85 25 Q 75 20 70 35" fill="url(#crabShell)" stroke="#7f1d1d" strokeWidth="2" />
    <path d="M 15 25 L 10 15 L 20 20" fill="url(#crabShell)" />
    <path d="M 85 25 L 90 15 L 80 20" fill="url(#crabShell)" />
    {/* Legs */}
    <path d="M 30 80 L 15 95" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 40 85 L 30 95" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 70 80 L 85 95" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 60 85 L 70 95" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    {/* Phone Base */}
    <path d="M 20 50 Q 50 30 80 50 L 75 80 Q 50 90 25 80 Z" fill="url(#phoneRed)" stroke="#7f1d1d" strokeWidth="2" />
    {/* Rotary Dial */}
    <circle cx="50" cy="65" r="15" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
    <circle cx="50" cy="65" r="3" fill="#94a3b8" />
    <circle cx="42" cy="58" r="2" fill="#e2e8f0" />
    <circle cx="50" cy="54" r="2" fill="#e2e8f0" />
    <circle cx="58" cy="58" r="2" fill="#e2e8f0" />
    <circle cx="61" cy="65" r="2" fill="#e2e8f0" />
    <circle cx="58" cy="72" r="2" fill="#e2e8f0" />
    {/* Eye Stalks */}
    <path d="M 40 45 L 35 25" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 60 45 L 65 25" fill="none" stroke="url(#crabShell)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="35" cy="25" r="5" fill="white" />
    <circle cx="65" cy="25" r="5" fill="white" />
    <circle cx="35" cy="25" r="2" fill="black" />
    <circle cx="65" cy="25" r="2" fill="black" />
  </svg>
);

const UmbrellaBat = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="umbFabric" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e1b4b"/>
        <stop offset="100%" stopColor="#312e81"/>
      </linearGradient>
      <linearGradient id="batWingDark" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0f172a"/>
        <stop offset="100%" stopColor="#020617"/>
      </linearGradient>
    </defs>
    {/* Handle */}
    <path d="M 50 50 L 50 85 Q 50 95 40 90" fill="none" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
    {/* Bat Wings */}
    <path d="M 50 60 Q 20 40 5 60 Q 20 80 30 70 Q 40 80 50 60" fill="url(#batWingDark)" stroke="#334155" strokeWidth="2" />
    <path d="M 50 60 Q 80 40 95 60 Q 80 80 70 70 Q 60 80 50 60" fill="url(#batWingDark)" stroke="#334155" strokeWidth="2" />
    {/* Canopy */}
    <path d="M 10 50 Q 50 10 90 50 Q 70 45 50 50 Q 30 45 10 50 Z" fill="url(#umbFabric)" stroke="#4338ca" strokeWidth="2" />
    {/* Giant Eye */}
    <circle cx="50" cy="40" r="10" fill="white" />
    <circle cx="50" cy="40" r="4" fill="#eab308" />
    <path d="M 50 36 L 50 44" fill="none" stroke="black" strokeWidth="3" />
  </svg>
);

const ToiletSnake = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="porcelain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="100%" stopColor="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="snakeSkin" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#166534"/>
        <stop offset="100%" stopColor="#22c55e"/>
      </linearGradient>
    </defs>
    {/* Frog Legs */}
    <path d="M 35 80 Q 15 70 20 95" fill="none" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" />
    <path d="M 65 80 Q 85 70 80 95" fill="none" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" />
    {/* Tank */}
    <rect x="30" y="10" width="40" height="35" rx="4" fill="url(#porcelain)" stroke="#94a3b8" strokeWidth="2" />
    <rect x="35" y="15" width="8" height="4" rx="1" fill="#cbd5e1" />
    {/* Bowl */}
    <ellipse cx="50" cy="60" rx="25" ry="15" fill="url(#porcelain)" stroke="#94a3b8" strokeWidth="2" />
    <path d="M 35 65 L 35 85 L 65 85 L 65 65 Z" fill="url(#porcelain)" stroke="#94a3b8" strokeWidth="2" />
    {/* Snake Tongue/Body */}
    <path d="M 50 60 Q 30 40 50 20 Q 70 40 50 60" fill="url(#snakeSkin)" />
    <path d="M 50 20 Q 40 10 30 15" fill="none" stroke="#ef4444" strokeWidth="2" />
    <path d="M 30 15 L 25 10 M 30 15 L 25 20" fill="none" stroke="#ef4444" strokeWidth="2" />
    {/* Eyes on Tank */}
    <circle cx="40" cy="30" r="4" fill="white" />
    <circle cx="60" cy="30" r="4" fill="white" />
    <circle cx="40" cy="30" r="1.5" fill="black" />
    <circle cx="60" cy="30" r="1.5" fill="black" />
  </svg>
);

const BookBite = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="leather" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78350f"/>
        <stop offset="50%" stopColor="#92400e"/>
        <stop offset="100%" stopColor="#78350f"/>
      </linearGradient>
      <linearGradient id="pages" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7"/>
        <stop offset="100%" stopColor="#fde68a"/>
      </linearGradient>
    </defs>
    {/* Spider Legs */}
    <path d="M 30 70 Q 10 80 5 60" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M 40 75 Q 20 90 15 95" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M 60 75 Q 80 90 85 95" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M 70 70 Q 90 80 95 60" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    {/* Book Cover */}
    <path d="M 10 30 L 50 40 L 90 30 L 85 70 L 50 80 L 15 70 Z" fill="url(#leather)" stroke="#451a03" strokeWidth="2" />
    {/* Pages */}
    <path d="M 15 35 L 50 45 L 85 35 L 80 65 L 50 75 L 20 65 Z" fill="url(#pages)" stroke="#d97706" strokeWidth="2" />
    <line x1="50" y1="45" x2="50" y2="75" stroke="#d97706" strokeWidth="2" />
    {/* Teeth */}
    <polygon points="20,38 25,45 30,39 35,46 40,40 45,47 50,45" fill="white" />
    <polygon points="50,45 55,47 60,40 65,46 70,39 75,45 80,38" fill="white" />
    <polygon points="25,63 30,55 35,64 40,56 45,65 50,58" fill="white" />
    <polygon points="50,58 55,65 60,56 65,64 70,55 75,63" fill="white" />
    {/* Eyes on Cover */}
    <circle cx="30" cy="55" r="5" fill="white" />
    <circle cx="70" cy="55" r="5" fill="white" />
    <circle cx="30" cy="55" r="2" fill="red" />
    <circle cx="70" cy="55" r="2" fill="red" />
  </svg>
);

const BlenderPus = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.7"/>
        <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.7"/>
      </linearGradient>
      <linearGradient id="blenderBase" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#64748b"/>
        <stop offset="100%" stopColor="#334155"/>
      </linearGradient>
      <radialGradient id="glowingEye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#4c1d95"/>
      </radialGradient>
    </defs>
    {/* Tentacles Top */}
    <path d="M 40 20 Q 20 5 10 20" fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
    <path d="M 60 20 Q 80 5 90 20" fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
    {/* Tentacles Bottom */}
    <path d="M 35 80 Q 15 95 5 80" fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
    <path d="M 65 80 Q 85 95 95 80" fill="none" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
    {/* Base */}
    <rect x="30" y="70" width="40" height="20" rx="4" fill="url(#blenderBase)" />
    <circle cx="40" cy="80" r="3" fill="#ef4444" />
    <circle cx="50" cy="80" r="3" fill="#e2e8f0" />
    <circle cx="60" cy="80" r="3" fill="#e2e8f0" />
    {/* Pitcher */}
    <polygon points="35,70 25,20 75,20 65,70" fill="url(#glass)" stroke="#38bdf8" strokeWidth="2" />
    {/* Lid */}
    <rect x="22" y="15" width="56" height="5" rx="2" fill="#1e293b" />
    <rect x="40" y="10" width="20" height="5" rx="2" fill="#1e293b" />
    {/* Eye inside pitcher */}
    <circle cx="50" cy="45" r="12" fill="url(#glowingEye)" />
    <circle cx="50" cy="45" r="4" fill="#fef08a" />
    <circle cx="50" cy="45" r="1.5" fill="black" />
  </svg>
);

const ToastAntennaNosePickle = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="toastCrust" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#b45309"/>
        <stop offset="100%" stopColor="#78350f"/>
      </linearGradient>
      <linearGradient id="toastBread" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde68a"/>
        <stop offset="100%" stopColor="#d97706"/>
      </linearGradient>
      <radialGradient id="pickle" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#84cc16"/>
        <stop offset="100%" stopColor="#4d7c0f"/>
      </radialGradient>
    </defs>
    {/* Antennas */}
    <path d="M 35 25 Q 25 10 15 15" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
    <circle cx="15" cy="15" r="4" fill="#ef4444" />
    <path d="M 65 25 Q 75 10 85 15" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
    <circle cx="85" cy="15" r="4" fill="#ef4444" />
    
    {/* Pickle Feet */}
    <ellipse cx="30" cy="85" rx="12" ry="8" fill="url(#pickle)" />
    <ellipse cx="70" cy="85" rx="12" ry="8" fill="url(#pickle)" />
    {/* Pickle Bumps */}
    <circle cx="25" cy="83" r="1.5" fill="#3f6212" />
    <circle cx="32" cy="86" r="1.5" fill="#3f6212" />
    <circle cx="28" cy="88" r="1.5" fill="#3f6212" />
    <circle cx="65" cy="83" r="1.5" fill="#3f6212" />
    <circle cx="72" cy="86" r="1.5" fill="#3f6212" />
    <circle cx="68" cy="88" r="1.5" fill="#3f6212" />

    {/* Toast Body */}
    <path d="M 20 40 Q 20 20 35 20 L 65 20 Q 80 20 80 40 L 80 75 Q 80 80 75 80 L 25 80 Q 20 80 20 75 Z" fill="url(#toastCrust)" />
    <path d="M 25 42 Q 25 25 35 25 L 65 25 Q 75 25 75 42 L 75 73 Q 75 75 73 75 L 27 75 Q 25 75 25 73 Z" fill="url(#toastBread)" />
    
    {/* Giant Nose */}
    <ellipse cx="50" cy="55" rx="18" ry="14" fill="#fca5a5" stroke="#f87171" strokeWidth="2" />
    
    {/* Eyes ON the Nose */}
    <circle cx="42" cy="52" r="5" fill="white" />
    <circle cx="58" cy="52" r="5" fill="white" />
    <circle cx="42" cy="52" r="2" fill="black" />
    <circle cx="58" cy="52" r="2" fill="black" />
  </svg>
);

const RobotRabbitClock = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0"/>
        <stop offset="50%" stopColor="#94a3b8"/>
        <stop offset="100%" stopColor="#475569"/>
      </linearGradient>
      <linearGradient id="earInner" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbcfe8"/>
        <stop offset="100%" stopColor="#f472b6"/>
      </linearGradient>
    </defs>
    {/* Robot Ears */}
    <path d="M 35 30 L 25 5 L 40 15 Z" fill="url(#metal)" stroke="#334155" strokeWidth="2" />
    <path d="M 33 25 L 28 10 L 38 17 Z" fill="url(#earInner)" />
    
    <path d="M 65 30 L 75 5 L 60 15 Z" fill="url(#metal)" stroke="#334155" strokeWidth="2" />
    <path d="M 67 25 L 72 10 L 62 17 Z" fill="url(#earInner)" />
    
    {/* Clock Face (Head) */}
    <circle cx="50" cy="50" r="25" fill="url(#metal)" stroke="#334155" strokeWidth="4" />
    <circle cx="50" cy="50" r="21" fill="white" />
    
    {/* Clock Ticks */}
    <line x1="50" y1="31" x2="50" y2="35" stroke="black" strokeWidth="2" />
    <line x1="50" y1="69" x2="50" y2="65" stroke="black" strokeWidth="2" />
    <line x1="31" y1="50" x2="35" y2="50" stroke="black" strokeWidth="2" />
    <line x1="69" y1="50" x2="65" y2="50" stroke="black" strokeWidth="2" />
    
    {/* Clock Hands (Eyes/Nose area) */}
    <circle cx="50" cy="50" r="3" fill="#ef4444" />
    <line x1="50" y1="50" x2="60" y2="40" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="50" x2="45" y2="38" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
    
    {/* Robot Buck Teeth */}
    <rect x="42" y="75" width="7" height="10" fill="white" stroke="#334155" strokeWidth="1.5" />
    <rect x="51" y="75" width="7" height="10" fill="white" stroke="#334155" strokeWidth="1.5" />
    
    {/* Screws */}
    <circle cx="35" cy="35" r="2" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
    <circle cx="65" cy="35" r="2" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
  </svg>
);

const MONSTER_TYPES = [
  Toasterpus, Teaspider, Lampbat, Clockfrog, SofaMouth,
  CarrotFoot, RocketTV, DrumstickFish, HornedClock, ToothbrushArms,
  CrabPhone, UmbrellaBat, ToiletSnake, BookBite, BlenderPus,
  ToastAntennaNosePickle, RobotRabbitClock
];

export const Monster = ({ index, delay }: { key?: number | string; index: number; delay: number }) => {
  const [isRetreating, setIsRetreating] = useState(false);
  const MonsterComponent = MONSTER_TYPES[index % MONSTER_TYPES.length];
  
  // Randomize initial position, scale, and animation values only once
  const [randomX] = useState(() => Math.random() * 100 - 50); // -50vw to 50vw
  const [randomY] = useState(() => Math.random() * 100 - 50); // -50vh to 50vh
  const [randomScale] = useState(() => 0.5 + Math.random() * 1.5); // 0.5 to 2.0
  const [randomRotation] = useState(() => Math.random() * 360);
  const [floatDuration] = useState(() => 2 + Math.random() * 3);
  
  const handleTap = () => {
    if (isRetreating) return;
    setIsRetreating(true);
    playMonsterSound(index);
  };

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-32 h-32 -ml-16 -mt-16 pointer-events-auto"
      initial={{ scale: 0, x: 0, y: 0, opacity: 0, rotate: 0 }}
      animate={isRetreating ? {
        scale: 0,
        x: 0,
        y: 0,
        opacity: 0,
        rotate: 0,
        transition: { duration: 0.5, ease: "backIn" }
      } : { 
        scale: randomScale, 
        x: `${randomX}vw`, 
        y: `${randomY}vh`, 
        opacity: 1,
        rotate: randomRotation,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 10,
          delay: delay,
        }
      }}
      exit={{
        scale: 0,
        x: 0,
        y: 0,
        opacity: 0,
        rotate: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2, rotate: 180, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.8, rotate: -180, transition: { duration: 0.2 } }}
        onClick={handleTap}
        className="w-full h-full cursor-pointer"
      >
        <MonsterComponent />
      </motion.div>
    </motion.div>
  );
};
