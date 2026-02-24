import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Accueil', href: '#accueil', icon: 'fas fa-home' },
  { label: 'Cabinet', href: '#le-cabinet', icon: 'fas fa-building' },
  { label: 'Compétences', href: '#nos-competences', icon: 'fas fa-scale-balanced' },
  { label: 'Actualités', href: '#actualites', icon: 'fas fa-newspaper' },
  { label: 'Contact', href: '#nous-contacter', icon: 'fas fa-envelope' },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState('#accueil')
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Tout en haut (moins de 50px) - toujours visible
      if (currentScrollY < 50) {
        setIsVisible(true)
      } 
      // Si on a scrollé plus de 100px
      else if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scroll vers le bas - cacher
          setIsVisible(false)
        } else {
          // Scroll vers le haut - montrer
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Dock Desktop */}
      <header 
        className={`hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav 
          className="flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-2xl border border-white/20 px-4 py-3 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className={`group relative flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                activeItem === item.href 
                  ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)]' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title={item.label}
            >
              <i className={`${item.icon} text-lg transition-transform group-hover:scale-110`} />
              <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
              {activeItem === item.href && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-gold)]" />
              )}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#accueil" className="flex items-center gap-2">
            <img
              src="/logo.jpeg"
              alt="Maître Waiss"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
              }}
            />
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </div>

        {/* Menu Burger Dropdown */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.href)
                  setIsMobileMenuOpen(false)
                }}
                className={`flex items-center gap-4 px-6 py-4 transition-all ${
                  activeItem === item.href 
                    ? 'bg-[var(--color-gold)]/20 text-[var(--color-gold)] border-l-4 border-[var(--color-gold)]' 
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <i className={`${item.icon} text-lg w-6`} />
                <span className="text-base font-medium">{item.label}</span>
              </a>
            ))}
            <a
              href="#nous-contacter"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 px-6 py-4 mt-2 mx-6 rounded-full bg-[var(--color-gold)] text-black font-semibold justify-center"
            >
              <i className="fas fa-envelope" />
              <span>Nous contacter</span>
            </a>
          </nav>
        )}
      </header>
    </>
  )
}
