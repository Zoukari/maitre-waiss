import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const specificites = [
  { titre: 'Un cabinet dédié à vos enjeux', texte: "Chaque dossier bénéficie d'une attention personnalisée.", icon: 'fas fa-gem' },
  { titre: 'Expertise reconnue', texte: 'Une maîtrise des procédures et des contentieux à forte dimension stratégique.', icon: 'fas fa-award' },
  { titre: 'Indépendance et pugnacité', texte: 'Le cabinet assure à ses clients une défense indépendante et déterminée.', icon: 'fas fa-shield-halved' },
  { titre: 'Discrétion et réactivité', texte: 'Réactivité et confidentialité au cœur de la relation client.', icon: 'fas fa-bolt' },
]

export default function TextReveal() {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const cardRef = useRef(null)
  const [titleRef, titleVisible] = useScrollReveal()
  const [statsRef, statsVisible] = useScrollReveal()

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const relativeX = e.clientX - rect.left
      setWidthPercentage((relativeX / rect.width) * 100)
    }
  }

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
    setTimeout(() => {
      if (!isMouseOver) {
        setWidthPercentage(0)
      }
    }, 100)
  }

  const rotateDeg = (widthPercentage - 50) * 0.1

  return (
    <section className="relative py-12 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="relative mx-auto max-w-5xl">
        <div 
          ref={titleRef}
          className={`text-center mb-10 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-2">Notre engagement</p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-gold)] mb-3">
            La justice en action
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[var(--color-text-muted)]">
            Survolez le texte pour révéler notre philosophie
          </p>
        </div>

        <div
          ref={cardRef}
          className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] backdrop-blur-xl p-6 md:p-8 mb-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          <div className="relative flex items-center justify-center min-h-[120px]">
            <div
              className="absolute z-20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] will-change-transform"
              style={{
                width: '100%',
                opacity: widthPercentage > 0 ? 1 : 0,
                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                transition: isMouseOver ? 'none' : 'all 0.4s ease-out',
              }}
            >
              <p className="text-lg md:text-2xl font-bold text-center leading-relaxed bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent"
                style={{
                  textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
                }}
              >
                "La justice est la vérité en action"
              </p>
              <p className="text-center mt-2 text-[10px] text-[var(--color-gold)] uppercase tracking-wider">
                Joseph Joubert
              </p>
            </div>

            <div
              className="absolute z-50 h-full w-[3px] bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent will-change-transform"
              style={{
                left: `${widthPercentage}%`,
                transform: `rotate(${rotateDeg}deg)`,
                opacity: widthPercentage > 0 ? 1 : 0,
                transition: isMouseOver ? 'none' : 'all 0.4s ease-out',
                boxShadow: '0 0 20px rgba(212, 197, 165, 0.8)'
              }}
            />

            <div className="overflow-hidden">
              <p className="text-lg md:text-2xl font-bold text-center leading-relaxed text-[#323238]">
                "L'ignorance de la loi n'excuse personne"
              </p>
              <p className="text-center mt-2 text-[10px] text-[#323238] uppercase tracking-wider">
                Adage juridique
              </p>

              <div className="absolute inset-0 pointer-events-none">
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-[var(--color-gold)] rounded-full opacity-20"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand-muted)]">Ce qui nous distingue</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">Nos spécificités</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {specificites.map((item) => (
            <div key={item.titre} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 transition-all hover:border-[var(--color-gold)]/40 hover:bg-white/10 shadow-xl">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                <i className={`${item.icon} text-sm`} aria-hidden />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{item.titre}</h3>
              <p className="text-[11px] leading-relaxed text-[var(--color-text-muted)]">{item.texte}</p>
            </div>
          ))}
        </div>

        <div 
          ref={statsRef}
          className={`flex items-center justify-center gap-8 max-w-3xl mx-auto scroll-reveal-scale ${statsVisible ? 'is-visible' : ''}`}
        >
          {[
            { value: '15+', label: 'Années', icon: 'fas fa-calendar-check' },
            { value: '500+', label: 'Dossiers', icon: 'fas fa-folder-open' },
            { value: '98%', label: 'Réussite', icon: 'fas fa-trophy' },
          ].map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-3 group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-transform group-hover:scale-110">
                <i className={`${stat.icon} text-sm`} />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] leading-none">{stat.value}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
              {index < 2 && (
                <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
