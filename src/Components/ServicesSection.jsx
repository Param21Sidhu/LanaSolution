import { customService, services, servicesSection } from '../content'

function ServiceIcon({ icon }) {
  if (icon === 'website') {
    return (
      <svg className="svc-icon" viewBox="0 0 36 36" overflow="visible">
        <rect x="4" y="7" width="28" height="20" rx="4" fill="none" stroke="#2f7fbf" strokeWidth="1.8" />
        <line x1="4" y1="13" x2="32" y2="13" stroke="#2f7fbf" strokeWidth="1.4" />
        <circle cx="9" cy="10" r="1.4" fill="#2f7fbf" />
        <circle cx="13.5" cy="10" r="1.4" fill="#2f7fbf" opacity=".45" />
      </svg>
    )
  }

  if (icon === 'app') {
    return (
      <svg className="svc-icon" viewBox="0 0 36 36" overflow="visible">
        <rect x="12" y="3" width="12" height="30" rx="4" fill="none" stroke="#2f7fbf" strokeWidth="1.8" />
        <line x1="15.5" y1="8" x2="20.5" y2="8" stroke="#2f7fbf" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="18" cy="28" r="1.6" fill="#2f7fbf" />
      </svg>
    )
  }

  if (icon === 'brand') {
    return (
      <svg className="svc-icon" viewBox="0 0 36 36" overflow="visible">
        <circle cx="18" cy="16" r="6.5" fill="none" stroke="#2f7fbf" strokeWidth="1.8" />
        <path d="M10.5 28 C12.5 23.5, 15.2 22, 18 22 C20.8 22, 23.5 23.5, 25.5 28" fill="none" stroke="#2f7fbf" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="13.5" r="1.4" fill="#2f7fbf" />
      </svg>
    )
  }

  if (icon === 'polish') {
    return (
      <svg className="svc-icon" viewBox="0 0 36 36" overflow="visible">
        <rect x="4" y="9" width="28" height="18" rx="4" fill="none" stroke="#2f7fbf" strokeWidth="1.8" />
        <path d="M10 18 C13 14, 17 14, 20 18 C23 22, 27 22, 30 18" fill="none" stroke="#2f7fbf" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className="svc-icon" viewBox="0 0 36 36" overflow="visible">
      <circle cx="18" cy="18" r="11" fill="none" stroke="#2f7fbf" strokeWidth="1.8" />
      <path d="M10 18 C12.5 14, 15 14, 17 18 C19 22, 21.5 22, 24 18 C26 14, 28.5 14, 30 18" fill="none" stroke="#2f7fbf" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ServicesSection({ lang, onNavigate, renderHtml }) {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <div className="section-label">{servicesSection.label[lang]}</div>
          <div className="section-title" dangerouslySetInnerHTML={renderHtml(servicesSection.title)} />
        </div>
        <p className="services-intro">{servicesSection.intro[lang]}</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.number} className="svc-item">
            <div className="svc-num">{service.number}</div>
            <div className="svc-body">
              <div className="svc-top">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3>{service.title[lang]}</h3>
              <p>{service.description[lang]}</p>
              <div className="svc-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="svc-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="svc-item svc-item-custom">
          <div className="svc-num">+</div>
          <div className="svc-body">
            <h3 className="svc-custom-title">{customService.title[lang]}</h3>
            <p>{customService.description[lang]}</p>
            <div className="svc-custom-link-wrap">
              <a href="#contact" className="svc-custom-link" onClick={(event) => onNavigate(event, '#contact')}>
                {customService.action[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
