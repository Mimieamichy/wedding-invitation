import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const a = new Audio(
      // Soft royalty-free instrumental
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1c5a0e3cb4.mp3?filename=romantic-piano-loop-39940.mp3",
    );
    a.loop = true;
    a.volume = 0.45;
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };
  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 glass rounded-full px-3 py-2 shadow-luxe">
      <button
        onClick={toggle}
        className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-mocha hover:text-gold-deep transition"
        aria-label={playing ? "Pause music" : "Play wedding music"}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="hidden sm:inline">
          {playing ? "Pause" : "🔊 Play Music"}
        </span>
      </button>
      <button
        onClick={toggleMute}
        className="p-1.5 text-mocha hover:text-gold-deep transition"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}