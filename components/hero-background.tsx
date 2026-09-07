"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  alpha: number;
  phase: number;
};

type Burst = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

const INTERACTION_RADIUS = 110;
const INTERACTION_STRENGTH = 0.9;
const MAX_BURSTS = 90;

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    // Pre-render a soft glow sprite so per-frame drawing stays cheap.
    const sprite = document.createElement("canvas");
    sprite.width = 64;
    sprite.height = 64;
    const spriteCtx = sprite.getContext("2d");
    if (!spriteCtx) return;
    const gradient = spriteCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(196, 216, 244, 0.9)");
    gradient.addColorStop(0.35, "rgba(158, 188, 232, 0.28)");
    gradient.addColorStop(1, "rgba(158, 188, 232, 0)");
    spriteCtx.fillStyle = gradient;
    spriteCtx.fillRect(0, 0, 64, 64);

    const count = Math.max(24, Math.min(80, Math.floor((width * height) / 16000)));
    const particles: Particle[] = Array.from({ length: count }, () => {
      const baseVx = (Math.random() - 0.5) * 0.14;
      const baseVy = -(0.05 + Math.random() * 0.2);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.5 + Math.random() * 1.6,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        alpha: 0.2 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2
      };
    });

    const pointer = { x: -9999, y: -9999 };
    const bursts: Burst[] = [];

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
        inside:
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
      };
    };

    const onPointerMove = (event: PointerEvent) => {
      const point = toLocal(event.clientX, event.clientY);
      pointer.x = point.inside ? point.x : -9999;
      pointer.y = point.inside ? point.y : -9999;
    };

    const onPointerDown = (event: PointerEvent) => {
      const point = toLocal(event.clientX, event.clientY);
      if (!point.inside || bursts.length > MAX_BURSTS) return;
      for (let i = 0; i < 10; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.2 + Math.random() * 2.4;
        bursts.push({
          x: point.x,
          y: point.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1
        });
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    let time = 0;
    const tick = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < INTERACTION_RADIUS * INTERACTION_RADIUS && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / INTERACTION_RADIUS) * INTERACTION_STRENGTH;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
        // Ease back to the base drift so particles settle after interaction.
        p.vx += (p.baseVx - p.vx) * 0.03;
        p.vy += (p.baseVy - p.vy) * 0.03;
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        const twinkle = 0.6 + 0.4 * Math.sin(time * 1.3 + p.phase);
        ctx.globalAlpha = p.alpha * twinkle;
        const size = p.r * 9;
        ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
      }

      for (let i = bursts.length - 1; i >= 0; i -= 1) {
        const b = bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.96;
        b.vy *= 0.96;
        b.life -= 0.02;
        if (b.life <= 0) {
          bursts.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = b.life * 0.8;
        const size = 9 + (1 - b.life) * 7;
        ctx.drawImage(sprite, b.x - size / 2, b.y - size / 2, size, size);
      }

      ctx.globalAlpha = 1;
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />;
}

export function HeroBackground() {
  const [canvasEnabled, setCanvasEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanvasEnabled(!reducedMotion.matches);
    update();
    reducedMotion.addEventListener("change", update);
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -top-32 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(148,178,220,0.13),transparent)] blur-2xl" />
      <div className="absolute -bottom-24 right-[-6rem] h-64 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(120,150,200,0.09),transparent)] blur-2xl" />
      {canvasEnabled ? <HeroCanvas /> : null}
    </div>
  );
}
