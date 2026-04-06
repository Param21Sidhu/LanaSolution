import { contactSection, formLabels, serviceOptions } from '../content'

export function ContactSection({
  lang,
  renderHtml,
  submitted,
  formData,
  onChange,
  onSubmit,
  isSubmitting,
  errorMessage,
}) {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-label">{contactSection.label[lang]}</div>
        <h2 className="contact-title" dangerouslySetInnerHTML={renderHtml(contactSection.title)} />
        <p className="contact-desc">{contactSection.description[lang]}</p>

        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                <path d="M1 5l7 5 7-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="contact-info-text"><a href="mailto:zuwi@lanasolution.com">zuwi@lanasolution.com</a></span>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                <path d="M8 4v4l3 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="contact-info-text">{contactSection.hours[lang]}</span>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 2h3l1.5 3.5-1.8 1.1a9 9 0 0 0 3.7 3.7l1.1-1.8L14 10v3a1 1 0 0 1-1 1C6.4 14 2 9.6 2 4a1 1 0 0 1 1-2z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="contact-info-text"><a href="tel:+15066073298">+1 506-607-3298</a></span>
          </div>
        </div>

        <div className="contact-waves" aria-hidden="true">
          <svg width="380" viewBox="0 0 380 110" overflow="visible">
            <path d="M0 18 C55 2,115 2,170 18 C225 34,285 34,340 18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <path d="M20 54 C75 38,135 38,190 54 C245 70,305 70,360 54" fill="none" stroke="#7a4f2d" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M40 90 C95 74,155 74,210 90 C265 106,325 106,380 90" fill="none" stroke="#b98746" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="contact-right">
        {!submitted ? (
          <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
            <input type="hidden" name="title" value={formData.service || 'Website Inquiry'} />
            <input type="hidden" name="time" value={formData.time} />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">{formLabels.fullName[lang]}</label>
                <input id="fullName" name="name" type="text" placeholder={formLabels.fullNamePlaceholder[lang]} value={formData.fullName} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{formLabels.email[lang]}</label>
                <input id="email" name="email" type="email" placeholder="you@brand.com" value={formData.email} onChange={onChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">{formLabels.company[lang]}</label>
              <input id="company" name="company" type="text" placeholder={formLabels.companyPlaceholder[lang]} value={formData.company} onChange={onChange} />
            </div>

            <div className="form-group">
              <label htmlFor="service">{formLabels.service[lang]}</label>
              <select id="service" name="service" value={formData.service} onChange={onChange} required>
                <option value="" disabled>
                  {formLabels.servicePlaceholder[lang]}
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.en} value={option.en}>
                    {option[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">{formLabels.message[lang]}</label>
              <textarea id="message" name="message" placeholder={formLabels.messagePlaceholder[lang]} value={formData.message} onChange={onChange} required />
            </div>

            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

            <button id="button" type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? formLabels.sending[lang] : formLabels.submit[lang]}
            </button>
          </form>
        ) : (
          <div className="form-success is-visible" id="form-success">
            <div className="success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="#f3c789" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>{contactSection.successTitle[lang]}</h3>
            <p>{contactSection.successMessage[lang]}</p>
          </div>
        )}
      </div>
    </section>
  )
}
