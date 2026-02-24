import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const actualites = [
  {
    id: 1,
    date: '15 Février 2026',
    titre: 'Nouvelle réglementation sur le droit maritime',
    description: 'Le cabinet accompagne ses clients dans la mise en conformité avec les nouvelles dispositions du code maritime djiboutien.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    date: '8 Février 2026',
    titre: 'Renforcement de l\'équipe juridique',
    description: 'Le cabinet accueille deux nouveaux collaborateurs spécialisés en droit des affaires internationales.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    date: '1 Février 2026',
    titre: 'Succès dans un arbitrage international',
    description: 'Le cabinet obtient gain de cause dans un contentieux commercial complexe impliquant plusieurs juridictions.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    date: '25 Janvier 2026',
    titre: 'Conférence sur le droit des affaires',
    description: 'Maître Waiss intervient lors d\'une conférence internationale sur les nouvelles pratiques en droit des affaires.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    date: '18 Janvier 2026',
    titre: 'Nouveau partenariat stratégique',
    description: 'Le cabinet établit un partenariat avec un cabinet international pour renforcer son expertise en droit maritime.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    date: '10 Janvier 2026',
    titre: 'Formation en droit pénal des affaires',
    description: 'Organisation d\'une session de formation pour les professionnels du droit sur les évolutions récentes du droit pénal.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    date: '28 Décembre 2025',
    titre: 'Victoire majeure en droit commercial',
    description: 'Le cabinet remporte une affaire complexe de droit commercial impliquant plusieurs entreprises internationales.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    date: '15 Décembre 2025',
    titre: 'Publication juridique reconnue',
    description: 'Maître Waiss publie un article de référence sur le droit maritime dans une revue juridique internationale.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop'
  },
  {
    id: 9,
    date: '5 Décembre 2025',
    titre: 'Médiation réussie en droit civil',
    description: 'Le cabinet facilite une médiation complexe aboutissant à un accord amiable entre les parties.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop'
  },
  {
    id: 10,
    date: '20 Novembre 2025',
    titre: 'Expansion des services juridiques',
    description: 'Ouverture d\'un nouveau département spécialisé en droit de la propriété intellectuelle et innovation.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop'
  }
]

const ITEMS_PER_PAGE = 3

export default function Actualites() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(actualites.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentActualites = actualites.slice(startIndex, endIndex)
  const [titleRef, titleVisible] = useScrollReveal()

  return (
    <section id="actualites" className="relative py-16 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="relative mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-2">
            Dernières nouvelles
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-gold)] mb-4">
            Actualités
          </h2>
          <p className="mx-auto max-w-xl text-[var(--color-text-muted)] text-sm">
            Suivez les dernières actualités et réussites du cabinet.
          </p>
        </div>

        {/* Timeline verticale avec alternance gauche/droite */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--color-gold)]/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {currentActualites.map((actu, index) => {
              const [itemRef, itemVisible] = useScrollReveal({ threshold: 0.2 })
              return (
              <div
                key={actu.id}
                ref={itemRef}
                className={`relative grid md:grid-cols-2 gap-6 items-center scroll-reveal ${itemVisible ? 'is-visible' : ''} ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] border-[3px] border-[#0a0a0a] shadow-lg shadow-[var(--color-gold)]/50" />
                </div>

                {/* Contenu */}
                <div className={`${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:col-start-2'}`}>
                  <div className="inline-block mb-3">
                    <span className="rounded-full bg-[var(--color-gold)]/20 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold text-[var(--color-gold)] border border-[var(--color-gold)]/30">
                      {actu.date}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white mb-2">
                    {actu.titre}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {actu.description}
                  </p>
                  <button className={`inline-flex items-center gap-2 mt-3 text-xs font-medium text-[var(--color-gold)] transition-all hover:gap-3 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    Lire la suite
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={index % 2 === 0 ? "M13 7l5 5m0 0l-5 5m5-5H6" : "M11 17l-5-5m0 0l5-5m-5 5h12"} />
                    </svg>
                  </button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                    <img
                      src={actu.image}
                      alt={actu.titre}
                      className="h-40 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </div>
            )})}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white/10 hover:border-[var(--color-gold)]/40"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all ${
                    currentPage === i + 1
                      ? 'bg-[var(--color-gold)] text-black'
                      : 'border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[var(--color-gold)]/40'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:bg-white/10 hover:border-[var(--color-gold)]/40"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
