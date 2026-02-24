import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Après 10 secondes, cacher le footer
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    // Vérifier si on est en bas de page
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight
      
      // Si on est tout en bas (moins de 100px du bas)
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer 
      className={`fixed left-1/2 z-[100] -translate-x-1/2 transition-all duration-700 ease-in-out ${
        isVisible ? 'bottom-4 md:bottom-6 opacity-100' : '-bottom-20 opacity-0'
      }`}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <a 
        href="https://klikdj.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="glass-card flex items-center justify-center gap-2 md:gap-4 rounded-full px-4 md:px-6 py-2 transition-all hover:scale-105 cursor-pointer w-[90vw] max-w-xs md:max-w-sm md:w-auto"
        style={{
          background: 'rgba(20, 20, 20, 0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}
      >
        <div className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-[10px] md:text-xs font-bold text-violet-400">
          K
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-neutral-400">
          <span>Site par <span className="font-semibold text-violet-400">KLIK</span></span>
          <span className="opacity-30">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </a>
    </footer>
  )
}
