import { brand, footerContent } from '../content'

export function SiteFooter() {
  return (
    <footer>
      <div className="f-logo">{brand.name}</div>
      <div className="f-copy">{footerContent.copyright}</div>
    </footer>
  )
}
