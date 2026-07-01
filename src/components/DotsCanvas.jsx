import { useEffect, useRef, useState, useCallback } from "react";

const ORANGE = "#f1ac7b";
const GRAY = "#9ca3af";

function makeDot(W, H) {
  const isOrange = Math.random() < 0.6;
  const r = 2 + Math.random() * 3;
  const speed = 0.4 + Math.random() * 1.2;
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    r,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    color: isOrange ? ORANGE : GRAY,
    alpha: 0.5 + Math.random() * 0.5,
  };
}

export default function DotsCanvas() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(100);

  const W = 1000;
  const H = 480;

  // Initialize dots
  useEffect(() => {
    dotsRef.current = Array.from({ length: 100 }, () => makeDot(W, H));
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function loop() {
      if (pausedRef.current) return;

      ctx.fillStyle = "rgba(17, 17, 17, 0.25)";
      ctx.fillRect(0, 0, W, H);

      for (const d of dotsRef.current) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.globalAlpha = d.alpha;
        ctx.fillStyle = d.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const togglePause = useCallback(() => {
    pausedRef.current = !pausedRef.current;
    setPaused((p) => {
      const next = !p;
      if (!next) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const loop = () => {
          if (pausedRef.current) return;
          ctx.fillStyle = "rgba(17, 17, 17, 0.25)";
          ctx.fillRect(0, 0, W, H);
          for (const d of dotsRef.current) {
            d.x += d.vx;
            d.y += d.vy;
            if (d.x < 0 || d.x > W) d.vx *= -1;
            if (d.y < 0 || d.y > H) d.vy *= -1;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.globalAlpha = d.alpha;
            ctx.fillStyle = d.color;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
          rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
      }
      return next;
    });
  }, []);

  const addDots = useCallback(() => {
    const newDots = Array.from({ length: 10 }, () => makeDot(W, H));
    dotsRef.current = [...dotsRef.current, ...newDots];
    setCount(dotsRef.current.length);
  }, []);

  const removeDots = useCallback(() => {
    dotsRef.current = dotsRef.current.slice(20);
    setCount(dotsRef.current.length);
  }, []);

  const resetDots = useCallback(() => {
    dotsRef.current = Array.from({ length:10 }, () => makeDot(W, H));
    setCount(100);
  }, []);

  return (
    <div className="h-full w-full flex  ">
      {/* Canvas */}
      <div className="rounded-2xl overflow-hidden border  shadow-2xl w-full ">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="w-full "
          style={{ background: "#111" }}
        />
      </div>

      {/* Controls */}
      {/* <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
        <button
          onClick={togglePause}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition"
        >
          {paused ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Play
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75v-9.5zm3.75 0A.75.75 0 0111.25 4.5H12.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75h-1.25a.75.75 0 01-.75-.75v-9.5z"
                  clipRule="evenodd"
                />
              </svg>
              Pause
            </>
          )}
        </button>

        <button
          onClick={addDots}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition border border-gray-700"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          Add 20
        </button>

        <button
          onClick={removeDots}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition border border-gray-700"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
              clipRule="evenodd"
            />
          </svg>
          Remove 20
        </button>

        <button
          onClick={resetDots}
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition border border-gray-700"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clipRule="evenodd"
            />
          </svg>
          Reset
        </button>
      </div> */}
    </div>
  );
}
