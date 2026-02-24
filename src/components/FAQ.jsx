import { useState } from 'react'

const items = [
  {
    q: 'Quels domaines du droit couvre le cabinet ?',
    a: 'Le cabinet intervient en droit commercial, civil, pénal, des affaires, international et maritime.'
  },
  {
    q: 'Comment prendre rendez-vous ?',
    a: 'Contactez-nous par téléphone, email ou via le formulaire de contact. Nous vous répondrons sous 24h.'
  },
  {
    q: 'Le cabinet intervient-il à l\'international ?',
    a: 'Oui, le cabinet participe à des missions juridiques et arbitrages à l\'international.'
  },
  {
    q: 'Quels sont les honoraires ?',
    a: 'Les honoraires sont définis lors du premier rendez-vous en fonction de la nature du dossier.'
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="relative border-t border-[var(--color-border)] py-16 px-6 overflow-hidden bg-[#0f0f0f]">
      <div className="relative mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-2">
            Informations
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-gold)]">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-2.5">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden rounded-2xl border border-[var(--color-border)] transition-colors hover:border-[var(--color-gold)]/30"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="font-[family-name:var(--font-display)] text-base font-medium text-white pr-3">
                  {item.q}
                </span>
                <span className={`shrink-0 text-[var(--color-gold)] transition-transform ${openId === i ? 'rotate-180' : ''}`}>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openId === i && (
                <div className="border-t border-[var(--color-border)] px-5 py-4">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
