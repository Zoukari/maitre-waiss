export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background image - bien visible */}
      <div 
        className="absolute inset-0 bg-cover md:bg-contain bg-center"
        style={{ 
          backgroundImage: 'url(/hero.jpg)',
          backgroundPosition: 'center 75%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1) contrast(1.05)'
        }}
      />
      
      {/* Dégradé principal - minimal pour voir l'image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      
      {/* Dégradé vers le bas */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-gold)]">
            Cabinet d'Avocat • Djibouti
          </span>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/logo.jpeg"
            alt="Maître Waiss - Cabinet d'avocat"
            className="h-24 w-auto max-w-md object-contain sm:h-28 md:h-32"
            onError={(e) => {
              e.target.onerror = null
              e.target.style.display = 'none'
              const fb = e.target.nextElementSibling
              if (fb) fb.classList.remove('hidden')
            }}
          />
          <h1
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ lineHeight: 1.1 }}
          >
            Maître <span className="text-[var(--color-gold)]">Waiss</span>
          </h1>
        </div>
        
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg font-light">
          L'excellence juridique au service de vos intérêts
        </p>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#le-cabinet" 
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] backdrop-blur-md px-6 py-2.5 text-sm font-medium text-black transition-all hover:bg-[var(--color-gold-light)] shadow-lg hover:shadow-xl"
          >
            Découvrir le Cabinet
          </a>
          <a
            href="#nous-contacter"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 backdrop-blur-md bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/10"
          >
            Nous contacter
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <svg
          className="h-5 w-5 text-[var(--color-gold)] opacity-60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
