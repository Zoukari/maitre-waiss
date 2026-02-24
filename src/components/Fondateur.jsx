import FlipWords from './FlipWords'
import { useScrollReveal } from '../hooks/useScrollReveal'

const equipe = [
  { nom: 'Lorem Ipsum', role: 'Avocat', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop' },
  { nom: 'Dolor Sit', role: 'Collaborateur', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop' },
  { nom: 'Amet Consectetur', role: 'Avocat', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=600&fit=crop' },
  { nom: 'Adipiscing Elit', role: 'Collaborateur', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop' },
]

export default function Fondateur() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [cardRef, cardVisible] = useScrollReveal()

  return (
    <section id="mot-du-fondateur" className="relative border-t border-[var(--color-border)] py-16 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-10 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-2">
            Les professionnels
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-gold)]">
            L'équipe
          </h2>
        </div>

        <div 
          ref={cardRef}
          className={`rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl scroll-reveal-scale ${cardVisible ? 'is-visible' : ''}`}
        >
          {/* Fondateur en large */}
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 items-stretch border-b border-white/10">
            <div className="relative min-h-[280px] md:min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
                alt="Maître Waiss"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold)] mb-4">
                Mot du fondateur
              </p>
              <blockquote className="font-[family-name:var(--font-serif)] text-base md:text-lg leading-relaxed text-neutral-400">
                La confiance que nos clients nous accordent est notre première priorité. Nous nous engageons à défendre vos intérêts avec{' '}
                <FlipWords
                  words={['rigueur', 'discrétion', 'détermination', 'excellence']}
                  duration={3000}
                  className="text-[var(--color-gold)] font-semibold text-base md:text-lg"
                />
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
                Maître Waiss, fondateur du cabinet
              </p>
            </div>
          </div>

          {/* Équipe en carré en dessous */}
          <div className="p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {equipe.map((m) => (
                <div
                  key={m.nom}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[var(--color-gold)]/40 hover:bg-white/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.nom}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                        {m.nom}
                      </h3>
                      <p className="mt-0.5 text-[10px] text-[var(--color-gold)]">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
