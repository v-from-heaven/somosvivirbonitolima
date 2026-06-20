import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeUrl: string;
  afterUrl: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfter({
  beforeUrl,
  afterUrl,
  beforeAlt = "Antes",
  afterAlt = "Después",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden bg-bone"
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      role="img"
      aria-label={`Comparación antes y después. Antes: ${beforeAlt}. Después: ${afterAlt}.`}
    >
      <img
        src={afterUrl}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading="lazy"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeUrl}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 bg-ink/70 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white">
        Antes
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-olive px-2 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white">
        Después
      </span>

      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-[2px] bg-olive shadow-[0_0_0_1px_rgba(255,255,255,0.6)]" />
      </div>
      <button
        type="button"
        aria-label="Mover comparación antes / después"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        role="slider"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          dragging.current = true;
        }}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-olive bg-background text-olive shadow-md transition-transform hover:scale-105"
        style={{ left: `${pos}%` }}
      >
        <span aria-hidden="true" className="flex items-center gap-0.5 text-xs leading-none">
          <span>‹</span>
          <span>›</span>
        </span>
      </button>
    </div>
  );
}