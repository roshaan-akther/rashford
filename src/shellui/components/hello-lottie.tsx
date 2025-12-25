'use client';

export function HelloLottie({ size = 20 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center rounded-md bg-muted text-muted-foreground"
      style={{ width: size, height: size, fontSize: size * 0.55 }}
    >
      👋
    </span>
  );
}
