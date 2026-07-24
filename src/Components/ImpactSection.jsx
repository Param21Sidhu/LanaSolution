import { useEffect, useRef, useState } from 'react'
import { BrandMark } from './BrandMark'
import { impactPledge, impactSection, impactStats, impactSteps } from '../content'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useRevealOnce() {
  const ref = useRef(null)
  // Browsers without IntersectionObserver skip the scroll trigger and show everything.
  const [revealed, setRevealed] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setRevealed(true)
        observer.disconnect()
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, revealed]
}

function CountUp({ target, active, duration = 1500 }) {
  // Reduced motion gets the final figure straight away, with no ticking.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))

  useEffect(() => {
    if (!active || prefersReducedMotion()) return

    let frame
    let start
    const step = (now) => {
      if (start === undefined) start = now
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = window.requestAnimationFrame(step)
    }

    frame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

export function ImpactSection({ lang, renderHtml }) {
  const [sectionRef, revealed] = useRevealOnce()

  return (
    <section className={`impact${revealed ? ' is-revealed' : ''}`} id="impact" ref={sectionRef}>
      <div className="impact-bg-wave" aria-hidden="true">
        <svg width="560" viewBox="0 0 560 200" overflow="visible">
          <path d="M0 44 C90 16, 200 16, 290 44 C380 72, 490 72, 580 44" fill="none" stroke="#24180f" strokeWidth="6" strokeLinecap="round" />
          <path d="M36 102 C126 74, 236 74, 326 102 C416 130, 526 130, 616 102" fill="none" stroke="#7a4f2d" strokeWidth="5" strokeLinecap="round" />
          <path d="M72 160 C162 132, 272 132, 362 160 C452 188, 562 188, 652 160" fill="none" stroke="#b98746" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="impact-inner">
        <div className="impact-head">
          <div>
            <div className="section-label">{impactSection.label[lang]}</div>
            <div className="section-title" dangerouslySetInnerHTML={renderHtml(impactSection.title)} />
          </div>
          <p className="impact-intro">{impactSection.intro[lang]}</p>
        </div>

        <div className="impact-stats">
          {impactStats.map((stat) => (
            <div key={stat.label.en} className="impact-stat">
              <div className="impact-num" aria-label={`${stat.value}${stat.suffix} ${stat.label[lang]}`}>
                <span aria-hidden="true">
                  <CountUp target={stat.value} active={revealed} />
                </span>
                <span className="impact-num-suffix" aria-hidden="true">
                  {stat.suffix}
                </span>
              </div>
              <svg className="impact-stat-wave" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                <path d="M3 16 C42 3, 76 3, 110 12 C144 21, 178 21, 217 8" />
              </svg>
              <div className="impact-stat-label">{stat.label[lang]}</div>
              <p className="impact-stat-desc">{stat.description[lang]}</p>
            </div>
          ))}
        </div>

        <div className="impact-flow">
          {impactSteps.map((step) => (
            <div key={step.number} className="impact-step">
              <div className="impact-step-num">{step.number}</div>
              <h3>{step.title[lang]}</h3>
              <p>{step.description[lang]}</p>
            </div>
          ))}
        </div>

        <div className="impact-pledge">
          <div className="impact-pledge-mark" aria-hidden="true">
            <BrandMark />
          </div>
          <p dangerouslySetInnerHTML={renderHtml(impactPledge.quote)} />
        </div>
      </div>
    </section>
  )
}
