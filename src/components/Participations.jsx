import { useState } from 'react'
import ShimmerButton from './ShimmerButton'

const items = [
  { 
    id: '1', 
    lieu: 'Genève, Suisse', 
    event: 'Colloque international', 
    texte: 'Intervention du cabinet dans le cadre d\'un colloque international sur les enjeux du droit maritime moderne et ses implications internationales.', 
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop' 
  },
  { 
    id: '2', 
    lieu: 'Paris, France', 
    event: 'Conférence droit des affaires', 
    texte: 'Participation à une conférence dédiée au droit des affaires et aux enjeux internationaux, avec focus sur les nouvelles réglementations européennes.', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop' 
  },
  { 
    id: '3', 
    lieu: 'Djibouti', 
    event: 'Interventions locales', 
    texte: 'Le cabinet assure des interventions et formations locales à Djibouti, contribuant au développement du secteur juridique national.', 
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&h=600&fit=crop' 
  },
  { 
    id: '4', 
    lieu: 'Addis-Abeba', 
    event: 'Mission juridique', 
    texte: 'Mission juridique et représentation du cabinet en Éthiopie pour des dossiers de droit commercial international et arbitrage.', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop' 
  },
]

export default function Participations() {
  const [modalItem, setModalItem] = useState(null)

  return (
    <section id="participations" className="section-dark relative border-t border-[var(--color-border)] py-16 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-2">
            Présence dans le monde
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-gold)] mb-4">
            Participations
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-muted)] text-sm">
            Le cabinet participe à des colloques, conférences et missions à l'international.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="card-rounded group relative h-full overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.lieu}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/70 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="badge-gold backdrop-blur-sm text-[10px] px-3 py-1">
                    {item.lieu}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <p className="text-[10px] uppercase tracking-wider text-[var(--color-sand-muted)] mb-2">
                  {item.event}
                </p>
                
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4 line-clamp-2">
                  {item.texte}
                </p>

                <ShimmerButton
                  type="button"
                  onClick={() => setModalItem(item)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <span>Voir plus</span>
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </ShimmerButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalItem && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setModalItem(null)}
        >
          <div
            className="modal-box relative max-h-[90vh] w-full max-w-3xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur-sm transition hover:bg-[var(--color-gold)] hover:text-black"
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="relative h-80 overflow-hidden rounded-t-2xl">
              <img 
                src={modalItem.image} 
                alt={modalItem.lieu} 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-10">
              <span className="badge-gold mb-6 inline-block">
                {modalItem.lieu}
              </span>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-gold)] mb-4">
                {modalItem.event}
              </h2>

              <div className="section-divider mb-8" />

              <p className="text-lg leading-relaxed text-[var(--color-text)]">
                {modalItem.texte}
              </p>

              <div className="mt-10 rounded-2xl bg-[var(--color-surface)] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
                  Informations
                </h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-center gap-3">
                    <i className="fas fa-location-dot text-[var(--color-gold)] w-4 text-center" aria-hidden />
                    <span>{modalItem.lieu}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fas fa-calendar text-[var(--color-gold)] w-4 text-center" aria-hidden />
                    <span>{modalItem.event}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
