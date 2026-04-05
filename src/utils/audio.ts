export const playMonsterSound = (index: number) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    // Use a singleton AudioContext
    if (!(window as any).monsterAudioCtx) {
      (window as any).monsterAudioCtx = new AudioContextClass();
    }
    const audioCtx: AudioContext = (window as any).monsterAudioCtx;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const type = index % 15;
    
    switch(type) {
      case 0: // Toasterpus - Boing
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.4);
        gain.gain.setValueAtTime(0.8, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        osc.start(t); osc.stop(t + 0.4);
        break;
      case 1: // Teaspider - Skitter
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, t);
        osc.frequency.linearRampToValueAtTime(1800, t + 0.05);
        osc.frequency.linearRampToValueAtTime(1200, t + 0.1);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.1);
        osc.start(t); osc.stop(t + 0.1);
        break;
      case 2: // Lampbat - Zap/Flap
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(20, t + 0.2);
        gain.gain.setValueAtTime(0.6, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
        osc.start(t); osc.stop(t + 0.2);
        break;
      case 3: // Clockfrog - Ribbit
        osc.type = 'square';
        osc.frequency.setValueAtTime(100, t);
        osc.frequency.linearRampToValueAtTime(150, t + 0.1);
        osc.frequency.linearRampToValueAtTime(100, t + 0.2);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
        osc.start(t); osc.stop(t + 0.2);
        break;
      case 4: // SofaMouth - Growl
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, t);
        osc.frequency.linearRampToValueAtTime(40, t + 0.5);
        gain.gain.setValueAtTime(0.8, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.5);
        osc.start(t); osc.stop(t + 0.5);
        break;
      case 5: // CarrotFoot - Thump
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(20, t + 0.3);
        gain.gain.setValueAtTime(1, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
        osc.start(t); osc.stop(t + 0.3);
        break;
      case 6: // RocketTV - Laser
        osc.type = 'square';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.3);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
        osc.start(t); osc.stop(t + 0.3);
        break;
      case 7: // DrumstickFish - Splat
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.linearRampToValueAtTime(500, t + 0.05);
        osc.frequency.linearRampToValueAtTime(200, t + 0.15);
        gain.gain.setValueAtTime(0.7, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.15);
        osc.start(t); osc.stop(t + 0.15);
        break;
      case 8: // HornedClock - Metallic
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.6);
        gain.gain.setValueAtTime(0.8, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);
        
        // Add a second oscillator for dissonance
        const osc2 = audioCtx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(420, t);
        osc2.frequency.exponentialRampToValueAtTime(105, t + 0.6);
        osc2.connect(gain);
        osc2.start(t); osc2.stop(t + 0.6);
        
        osc.start(t); osc.stop(t + 0.6);
        break;
      case 9: // ToothbrushArms - Chitter
        osc.type = 'square';
        osc.frequency.setValueAtTime(2000, t);
        osc.frequency.linearRampToValueAtTime(1000, t + 0.1);
        gain.gain.setValueAtTime(0.3, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.1);
        osc.start(t); osc.stop(t + 0.1);
        break;
      case 10: // CrabPhone - Ring/Click
        osc.type = 'square';
        osc.frequency.setValueAtTime(600, t);
        osc.frequency.linearRampToValueAtTime(800, t + 0.05);
        osc.frequency.linearRampToValueAtTime(600, t + 0.1);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.1);
        osc.start(t); osc.stop(t + 0.1);
        break;
      case 11: // UmbrellaBat - Whoosh
        osc.type = 'sine';
        osc.frequency.setValueAtTime(100, t);
        osc.frequency.exponentialRampToValueAtTime(20, t + 0.4);
        gain.gain.setValueAtTime(0.8, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        osc.start(t); osc.stop(t + 0.4);
        break;
      case 12: // ToiletSnake - Hiss/Flush
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(200, t + 0.5);
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.5);
        osc.start(t); osc.stop(t + 0.5);
        break;
      case 13: // BookBite - Snap
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1000, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.1);
        gain.gain.setValueAtTime(0.9, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
        osc.start(t); osc.stop(t + 0.1);
        break;
      case 14: // BlenderPus - Whir
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, t);
        osc.frequency.linearRampToValueAtTime(400, t + 0.2);
        osc.frequency.linearRampToValueAtTime(200, t + 0.4);
        gain.gain.setValueAtTime(0.5, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.4);
        osc.start(t); osc.stop(t + 0.4);
        break;
      case 15: // ToastAntennaNosePickle - Crunchy/Boing
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(50, t + 0.3);
        gain.gain.setValueAtTime(0.7, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
        osc.start(t); osc.stop(t + 0.3);
        break;
      case 16: // RobotRabbitClock - Tick/Mechanical
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1500, t);
        osc.frequency.linearRampToValueAtTime(1500, t + 0.05);
        gain.gain.setValueAtTime(0.8, t);
        gain.gain.linearRampToValueAtTime(0.01, t + 0.05);
        osc.start(t); osc.stop(t + 0.05);
        
        const oscTick = audioCtx.createOscillator();
        oscTick.type = 'square';
        oscTick.frequency.setValueAtTime(800, t + 0.1);
        oscTick.frequency.linearRampToValueAtTime(800, t + 0.15);
        oscTick.connect(gain);
        oscTick.start(t + 0.1); oscTick.stop(t + 0.15);
        break;
    }
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};
