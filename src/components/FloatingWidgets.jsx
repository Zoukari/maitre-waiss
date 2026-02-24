import { useState, useRef, useEffect } from 'react'

const WHATSAPP_NUMBER = '253XXXXXXXX'

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'العربية' },
]

export default function FloatingWidgets() {
  const [lang, setLang] = useState('fr')
  const [langOpen, setLangOpen] = useState(false)
  const menuRef = useRef(null)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const currentLabel = LANGUAGES.find((l) => l.code === lang)?.label ?? 'FR'

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <div className="relative" ref={menuRef}>
        {langOpen && (
          <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 rounded-xl border border-[var(--color-gold)]/30 bg-[#0a0a0a]/98 backdrop-blur-md p-2 shadow-xl">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLang(code)
                  setLangOpen(false)
                }}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  lang === code
                    ? 'bg-[var(--color-gold)] text-[#0a0a0a]'
                    : 'text-[var(--color-gold)] hover:bg-[var(--color-gold)]/20'
                }`}
                aria-label={`Langue : ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setLangOpen((o) => !o)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[#0a0a0a]/95 text-[var(--color-gold)] shadow-lg backdrop-blur-sm transition-colors hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
          aria-expanded={langOpen}
          aria-label="Choisir la langue"
        >
          <span className="text-sm font-semibold">{currentLabel}</span>
        </button>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
        aria-label="Contacter via WhatsApp"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
