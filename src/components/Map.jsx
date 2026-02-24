import { useState } from 'react'

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.1807029300894!2d43.13228937318319!3d11.584109743780719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x162301669f612ee9%3A0x99765ac1be819984!2sCabinet%20d%27avocat%20WAIS!5e1!3m2!1sfr!2sdj!4v1771185269716!5m2!1sfr!2sdj"

export default function Map() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="map" className="relative border-t border-[var(--color-border)] overflow-hidden">
      <div className="pt-24 pb-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-gold)]">
          Plan d'accès
        </h2>
      </div>

      <div 
        className="relative h-[500px] w-full bg-[#0c0c0c] rounded-3xl overflow-hidden mx-auto max-w-7xl px-6 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <iframe
          title="Carte - Cabinet Maître Waiss"
          src={MAP_EMBED_SRC}
          width="100%"
          height="100%"
          style={{ 
            border: 0, 
            filter: isHovered 
              ? 'grayscale(0) contrast(1.1) brightness(1)' 
              : 'grayscale(1) contrast(1.08) brightness(0.92)',
            transition: 'filter 0.5s ease'
          }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full h-full min-h-[500px]"
        />
      </div>
      
      <div className="pb-24"></div>
    </section>
  )
}
