import { useEffect, useRef, useState } from 'react'

// Each click gets a bit more desperate and spins a bit faster.
// The last line gives up and opens the mail client instead.
const LINES = [
  'please hire us ✦',
  "we're nice",
  'we have snacks',
  "ok we'll do it for exposure (no)",
  'fine. hello@gepf.at',
]

// Degrees per second for each line. 30°/s is the original 12s per turn;
// the last one calms back down, it has said what it wanted to say.
const SPEEDS = [30, 60, 110, 160, 30]

export default function HireBadge() {
  const [step, setStep] = useState(0)
  const ref = useRef<HTMLButtonElement>(null)
  const targetSpeed = useRef(SPEEDS[0])

  useEffect(() => {
    targetSpeed.current = SPEEDS[step]
  }, [step])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let angle = 12
    let speed = SPEEDS[0]
    let last = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      // Ease towards the target speed instead of jumping to it.
      speed += (targetSpeed.current - speed) * Math.min(dt * 2.5, 1)
      angle = (angle + speed * dt) % 360
      el.style.transform = `translateY(-50%) rotate(${angle}deg)`
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const isLast = step === LINES.length - 1

  return (
    <button
      ref={ref}
      type="button"
      className={isLast ? 'badge-float badge-float-last' : 'badge-float'}
      onClick={() => {
        if (isLast) window.location.href = 'mailto:hello@gepf.at'
        else setStep(step + 1)
      }}
    >
      <span aria-live="polite">{LINES[step]}</span>
    </button>
  )
}
