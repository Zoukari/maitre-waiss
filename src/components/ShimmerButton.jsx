export default function ShimmerButton({
  children,
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-6 py-3 text-sm font-medium tracking-wide text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/60 hover:bg-[var(--color-gold)]/15 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
