/**
 * FlipCard 3D - Carte qui se retourne au survol
 * Luxurious 2026 - Noir & Or
 */
export default function FlipCard({ children, backContent, className = '' }) {
  return (
    <div className={`flip-card-container ${className}`}>
      <div className="flip-card-inner">
        {/* FACE AVANT */}
        <div className="flip-card-front">
          {children}
        </div>
        
        {/* FACE ARRIÈRE */}
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  )
}
