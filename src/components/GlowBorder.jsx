/**
 * GlowBorder - Bordure lumineuse animée en dégradé doré
 * Luxurious 2026 - Effet de brillance
 */
export default function GlowBorder({ children, className = '' }) {
  return (
    <div className={`glow-border-wrapper ${className}`}>
      {children}
    </div>
  )
}
