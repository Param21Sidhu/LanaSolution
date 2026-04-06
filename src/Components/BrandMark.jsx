export function BrandMark({ className = '', title = 'Lana Solution mark' }) {
  return (
    <svg className={className} viewBox="0 0 170 60" aria-label={title}>
      <path d="M0 12 C26 0, 58 0, 84 12 C110 24, 142 24, 168 12" fill="none" stroke="#d33a36" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 30 C36 18, 68 18, 94 30 C120 42, 152 42, 178 30" fill="none" stroke="#1f2221" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 48 C46 36, 78 36, 104 48 C130 60, 162 60, 188 48" fill="none" stroke="#9fd3c2" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}
