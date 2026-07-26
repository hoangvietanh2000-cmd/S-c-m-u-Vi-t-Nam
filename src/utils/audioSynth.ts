// Web Audio API Ambient Folk Synthesizer & Audio Pronunciation Trigger

class AudioSynthesizer {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private ambientOscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;

  private initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
  }

  public toggleAmbientMusic(onStateChange?: (playing: boolean) => void) {
    this.initContext();
    if (!this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stopAmbient();
      if (onStateChange) onStateChange(false);
    } else {
      this.startAmbientPentatonicTone();
      if (onStateChange) onStateChange(true);
    }
  }

  private startAmbientPentatonicTone() {
    if (!this.audioCtx) return;
    this.stopAmbient();

    this.isPlaying = true;
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
    this.gainNode.connect(this.audioCtx.destination);

    // Traditional Vietnamese Pentatonic Scale Frequencies (approx A4, C5, D5, E5, G5, A5)
    const frequencies = [220, 261.63, 293.66, 329.63, 392.00, 440.00];

    frequencies.slice(0, 3).forEach((freq, idx) => {
      if (!this.audioCtx || !this.gainNode) return;
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Low frequency modulation for subtle undulating gong/bamboo feel
      const lfo = this.audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.audioCtx.currentTime);
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(5, this.audioCtx.currentTime);

      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode);

      osc.start();
      this.ambientOscillators.push(osc);
    });
  }

  public stopAmbient() {
    this.ambientOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // silence
      }
    });
    this.ambientOscillators = [];
    this.isPlaying = false;
  }

  public playGongSound() {
    this.initContext();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.audioCtx.currentTime + 1.2);

    gain.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 2.5);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 2.6);
  }

  public speakEthnicName(text: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      this.playGongSound();
    }
  }
}

export const audioSynth = new AudioSynthesizer();
