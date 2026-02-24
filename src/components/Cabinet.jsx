import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Cabinet() {
  const [imageRef, imageVisible] = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()

  return (
    <section id="le-cabinet" className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 px-6 overflow-hidden">
      <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10 md:items-center">
        <div 
          ref={imageRef}
          className={`relative overflow-hidden rounded-2xl border border-[var(--color-border)] scroll-reveal-left ${imageVisible ? 'is-visible' : ''}`}
        >
          <img
            src="/pexels-sora-shimazaki-5668802.jpg"
            alt="Cabinet"
            className="h-64 w-full object-cover md:h-80"
          />
        </div>
        <div 
          ref={textRef}
          className={`scroll-reveal-right ${textVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand-muted)]">Présentation</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
            Le cabinet
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#a09a8e]">
            Le cabinet Maître Waiss vous accompagne dans tous vos enjeux juridiques à Djibouti et à l'international.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#a09a8e]">
            Depuis sa création, le cabinet consacre son activité à la défense et au conseil des particuliers et des professionnels, avec rigueur et discrétion.
          </p>
        </div>
      </div>
    </section>
  )
}
