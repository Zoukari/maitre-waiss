import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { 
    titre: 'Droit commercial', 
    texte: 'Conseil et contentieux en droit des sociétés, contrats commerciaux et concurrence.', 
    iconClass: 'fas fa-scale-balanced',
    details: 'Le cabinet accompagne les entreprises dans la création, la gestion et la restructuration de leurs sociétés. Nous intervenons dans la rédaction et la négociation de contrats commerciaux complexes, ainsi que dans les litiges liés au droit de la concurrence et aux pratiques commerciales déloyales.'
  },
  { 
    titre: 'Droit civil', 
    texte: 'Responsabilité civile, contrats, famille et successions, droit des obligations.', 
    iconClass: 'fas fa-users',
    details: 'Notre expertise en droit civil couvre un large éventail de domaines : responsabilité contractuelle et extracontractuelle, droit de la famille (divorce, garde d\'enfants, pension alimentaire), successions et donations, ainsi que le droit des obligations. Nous offrons un accompagnement personnalisé pour chaque situation.'
  },
  { 
    titre: 'Droit pénal', 
    texte: 'Défense et conseil en procédure pénale, droit pénal des affaires.', 
    iconClass: 'fas fa-shield-halved',
    details: 'Le cabinet assure la défense de ses clients devant toutes les juridictions pénales. Nous intervenons tant en matière de droit pénal général que de droit pénal des affaires (fraude, abus de biens sociaux, corruption). Notre approche privilégie une défense rigoureuse et stratégique.'
  },
  { 
    titre: 'Droit des affaires', 
    texte: 'Fusions, acquisitions, restructurations et droit économique.', 
    iconClass: 'fas fa-briefcase',
    details: 'Nous conseillons les entreprises dans leurs opérations de croissance externe : fusions-acquisitions, joint-ventures, restructurations. Notre expertise s\'étend également au droit économique, aux partenariats stratégiques et à la gouvernance d\'entreprise.'
  },
  { 
    titre: 'Droit international', 
    texte: 'Arbitrage, contrats internationaux et contentieux transfrontaliers.', 
    iconClass: 'fas fa-globe',
    details: 'Le cabinet intervient dans les contentieux internationaux et l\'arbitrage commercial. Nous accompagnons nos clients dans la rédaction et l\'exécution de contrats internationaux, ainsi que dans la résolution de litiges transfrontaliers complexes impliquant plusieurs juridictions.'
  },
  { 
    titre: 'Droit maritime', 
    texte: 'Transport maritime, logistique et commerce international à Djibouti.', 
    iconClass: 'fas fa-ship',
    details: 'Compte tenu de la position stratégique de Djibouti, le cabinet a développé une expertise pointue en droit maritime. Nous intervenons dans les contentieux liés au transport maritime, aux opérations portuaires, à la logistique internationale et au commerce maritime.'
  },
]

export default function Competences() {
  const [modalItem, setModalItem] = useState(null)
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="nos-competences" className="relative py-16 px-6 overflow-hidden bg-[#0f0f0f]">
      <div className="relative mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand-muted)] mb-2">
            Domaines d'intervention
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-white mb-4">
            Nos compétences
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-muted)] text-sm">
            Le cabinet intervient dans l'ensemble des domaines du droit pour les particuliers et les professionnels.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const [cardRef, cardVisible] = useScrollReveal({ threshold: 0.2 })
            return (
            <div 
              key={item.titre} 
              ref={cardRef}
              className={`group relative h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-gold)]/40 scroll-reveal-scale ${cardVisible ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-elevated)] text-[var(--color-gold)]">
                <i className={`${item.iconClass} text-lg`} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.titre}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--color-text-muted)] mb-4">
                {item.texte}
              </p>
              <button
                onClick={() => setModalItem(item)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] transition-all hover:gap-3"
              >
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )})}
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setModalItem(null)}
        >
          <div
            className="modal-box relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl"
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

            <div className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-gold)]/10">
                <i className={`${modalItem.iconClass} text-3xl text-[var(--color-gold)]`} aria-hidden />
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-gold)] mb-3">
                {modalItem.titre}
              </h2>

              <div className="section-divider mb-6" />

              <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-4">
                {modalItem.texte}
              </p>

              <p className="text-base leading-relaxed text-[var(--color-text)]">
                {modalItem.details}
              </p>

              <div className="mt-8 rounded-2xl bg-[var(--color-surface)] p-5 border border-[var(--color-border)]">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
                  Besoin d'assistance ?
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mb-3">
                  Notre équipe est à votre disposition pour discuter de votre situation et vous proposer un accompagnement personnalisé.
                </p>
                <a
                  href="#nous-contacter"
                  onClick={() => setModalItem(null)}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[var(--color-gold-light)]"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
