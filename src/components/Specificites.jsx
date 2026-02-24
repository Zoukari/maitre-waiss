const stats = [
  { value: '15+', label: "Années d'expérience" },
  { value: '500+', label: 'Dossiers traités' },
  { value: '98%', label: 'Taux de réussite' },
]

const items = [
  { titre: 'Un cabinet dédié à vos enjeux', texte: "Chaque dossier bénéficie d'une attention personnalisée.", icon: 'fas fa-gem' },
  { titre: 'Expertise reconnue', texte: 'Une maîtrise des procédures et des contentieux à forte dimension stratégique.', icon: 'fas fa-award' },
  { titre: 'Indépendance et pugnacité', texte: 'Le cabinet assure à ses clients une défense indépendante et déterminée.', icon: 'fas fa-shield-halved' },
  { titre: 'Discrétion et réactivité', texte: 'Réactivité et confidentialité au cœur de la relation client.', icon: 'fas fa-bolt' },
]

const marqueeItems = ['Conseil', 'Tribunaux', 'Arbitrage', 'Commerce', 'International', 'Sociétés', 'Pénal', 'Civil', 'Maritime', 'Contentieux']

export default function Specificites() {
  return (
    <section id="nos-specificites" className="relative border-t border-[var(--color-border)] bg-[#0f0f0f] py-24 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-3">Résultats</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-6">Notre impact</h2>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)] text-lg">Chiffres clés du cabinet.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-gold)]">
                {stat.value}
              </div>
              <h3 className="mt-4 text-sm font-medium uppercase tracking-widest text-[var(--color-text-muted)]">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-sand-muted)]">Ce qui nous distingue</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">Nos spécificités</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {items.map((item) => (
            <div key={item.titre} className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-gold)]/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-elevated)] text-[var(--color-gold)]">
                <i className={`${item.icon} text-lg`} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.texte}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden py-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-10">Domaines & expertise</p>
          <div className="flex gap-8 justify-center flex-wrap">
            {marqueeItems.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center text-lg font-medium text-[var(--color-text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
