const equipe = [
  { nom: 'Maître Waiss', role: 'Fondateur', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop' },
  { nom: 'Lorem Ipsum', role: 'Avocat', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop' },
  { nom: 'Dolor Sit', role: 'Collaborateur', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop' },
  { nom: 'Amet Consectetur', role: 'Avocat', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=600&fit=crop' },
  { nom: 'Adipiscing Elit', role: 'Collaborateur', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop' },
]

export default function Equipe() {
  return (
    <section id="lequipe" className="relative border-t border-[var(--color-border)] bg-[#0f0f0f] py-24 px-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sand-muted)] mb-3">
            Les professionnels
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-[var(--color-gold)]">
            L'équipe
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {equipe.map((m) => (
            <div
              key={m.nom}
              className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#0f0f0f] transition-all hover:border-[var(--color-gold)]/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={m.image}
                  alt={m.nom}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {m.nom}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-gold)]">
                    {m.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
