import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WHATSAPP_NUMBER = '253XXXXXXXX'
const MAP_EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.1807029300894!2d43.13228937318319!3d11.584109743780719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x162301669f612ee9%3A0x99765ac1be819984!2sCabinet%20d%27avocat%20WAIS!5e1!3m2!1sfr!2sdj!4v1771185269716!5m2!1sfr!2sdj"

export default function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMapHovered, setIsMapHovered] = useState(false)
  const [titleRef, titleVisible] = useScrollReveal()
  const [infoRef, infoVisible] = useScrollReveal()
  const [formRef, formVisible] = useScrollReveal()

  const whatsappText = encodeURIComponent(
    `Bonjour,\n\nJe suis ${nom || '...'} (${email || '...'}).\n\n${message || '...'}`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${whatsappText}`

  return (
    <section id="nous-contacter" className="relative py-16 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <div 
          ref={titleRef}
          className={`text-center mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand-muted)] mb-2">Échange</p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-gold)] md:text-3xl">Nous contacter</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div 
            ref={infoRef}
            className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl scroll-reveal-left ${infoVisible ? 'is-visible' : ''}`}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-gold)]/10">
              <svg className="h-6 w-6 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white mb-5">Cabinet Maître Waiss</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <svg className="h-4 w-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Adresse placeholder, Djibouti</p>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p className="text-sm text-[var(--color-text-muted)]">+253 XX XX XX XX</p>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 text-[var(--color-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p className="text-sm text-[var(--color-text-muted)]">contact@cabinetwaiss.dj</p>
              </div>
              <div className="flex items-start gap-2.5 pt-3 border-t border-[var(--color-border)]">
                <svg className="h-4 w-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Sur rendez-vous<br />Du lundi au vendredi</p>
              </div>
            </div>

            <div 
              className="relative h-[240px] w-full bg-[#0c0c0c] rounded-2xl overflow-hidden border border-[var(--color-border)] mt-5"
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
            >
              <iframe
                title="Carte - Cabinet Maître Waiss"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: isMapHovered 
                    ? 'grayscale(0) contrast(1.1) brightness(1)' 
                    : 'grayscale(1) contrast(1.08) brightness(0.92)',
                  transition: 'filter 0.5s ease'
                }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full"
              />
            </div>
          </div>

          <div 
            ref={formRef}
            className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl scroll-reveal-right ${formVisible ? 'is-visible' : ''}`}
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white mb-5">Envoyez-nous un message</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-1.5 text-xs font-medium text-[var(--color-text-muted)]">Nom complet *</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] backdrop-blur-sm px-3.5 py-2.5 text-sm text-white placeholder:text-[#6b6356] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block mb-1.5 text-xs font-medium text-[var(--color-text-muted)]">Adresse email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] backdrop-blur-sm px-3.5 py-2.5 text-sm text-white placeholder:text-[#6b6356] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                  placeholder="votre@email.dj"
                  required
                />
              </div>
              <div>
                <label className="block mb-1.5 text-xs font-medium text-[var(--color-text-muted)]">Votre message *</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] backdrop-blur-sm px-3.5 py-2.5 text-sm text-white placeholder:text-[#6b6356] focus:border-[var(--color-gold)]/50 focus:outline-none transition-colors"
                  placeholder="Décrivez votre demande..."
                  required
                />
              </div>
              <div className="mt-1 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-gold)] backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[var(--color-gold-light)] shadow-lg hover:shadow-xl"
                >
                  Envoyer par email
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#22c55e] hover:border-[#22c55e] shadow-lg hover:shadow-xl"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Envoyer via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
