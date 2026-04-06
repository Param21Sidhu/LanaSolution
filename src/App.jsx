import { useEffect, useRef, useState } from 'react'
import './App.css'
import { IntroLoader } from './Components/IntroLoader'
import { DuneSweep } from './Components/DuneSweep'
import { NavBar } from './Components/NavBar'
import { HeroSection } from './Components/HeroSection'
import { ServicesSection } from './Components/ServicesSection'
import { CtaBand } from './Components/CtaBand'
import { AboutSection } from './Components/AboutSection'
import { ContactSection } from './Components/ContactSection'
import { SiteFooter } from './Components/SiteFooter'

const initialFormData = {
  fullName: '',
  email: '',
  company: '',
  service: '',
  message: '',
  time: '',
}

const EMAILJS_SERVICE_ID = 'service_je7l62r'
const EMAILJS_TEMPLATE_ID = 'template_6danjzk'
const EMAILJS_PUBLIC_KEY = 'BUv2UzA-LE0eBWfB_'

function App() {
  const [lang, setLang] = useState('en')
  const [navOpen, setNavOpen] = useState(false)
  const [sweepActive, setSweepActive] = useState(false)
  const [introNameVisible, setIntroNameVisible] = useState(false)
  const [introDividerVisible, setIntroDividerVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(false)
  const [introHidden, setIntroHidden] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const introStartedRef = useRef(false)

  useEffect(() => {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en'
    document.body.classList.toggle('rtl', lang === 'ar')

    return () => {
      document.body.classList.remove('rtl')
    }
  }, [lang])

  useEffect(() => {
    if (introStartedRef.current) return
    introStartedRef.current = true

    const timers = [
      window.setTimeout(() => setIntroNameVisible(true), 2660),
      window.setTimeout(() => setIntroDividerVisible(true), 2800),
      window.setTimeout(() => setPageVisible(true), 4320),
      window.setTimeout(() => setIntroHidden(true), 5170),
    ]

    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [])

  const renderHtml = (entry) => ({ __html: entry[lang] })

  const navigateWithSweep = (event, href) => {
    event.preventDefault()
    setNavOpen(false)
    setSweepActive(true)

    window.setTimeout(() => {
      const target = document.getElementById(href.replace('#', ''))
      if (target) target.scrollIntoView({ behavior: 'auto' })
    }, 500)

    window.setTimeout(() => setSweepActive(false), 900)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    if (errorMessage) setErrorMessage('')
    setFormData((current) => ({
      ...current,
      [name === 'name' ? 'fullName' : name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!window.emailjs) {
      setErrorMessage(lang === 'ar' ? 'خدمة البريد غير متاحة حالياً.' : 'Email service is not available right now.')
      return
    }

    setIsSubmitting(true)
    const nextTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
    setFormData((current) => ({ ...current, time: nextTime }))
    const form = event.currentTarget
    const timeInput = form.querySelector('input[name="time"]')
    if (timeInput) {
      timeInput.value = nextTime
    }

    try {
      await window.emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
      setFormData(initialFormData)
    } catch (error) {
      setErrorMessage(lang === 'ar' ? 'فشل إرسال الرسالة. حاول مرة أخرى.' : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <IntroLoader nameVisible={introNameVisible} dividerVisible={introDividerVisible} hidden={introHidden} />
      <DuneSweep active={sweepActive} />

      <div id="page" className={pageVisible ? 'show' : ''}>
        <NavBar
          lang={lang}
          onToggleLanguage={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
          onNavigate={navigateWithSweep}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
        />
        <HeroSection lang={lang} onNavigate={navigateWithSweep} renderHtml={renderHtml} />
        <ServicesSection lang={lang} onNavigate={navigateWithSweep} renderHtml={renderHtml} />
        <CtaBand lang={lang} onNavigate={navigateWithSweep} renderHtml={renderHtml} />
        <AboutSection lang={lang} renderHtml={renderHtml} />
        <ContactSection
          lang={lang}
          renderHtml={renderHtml}
          submitted={submitted}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
        <SiteFooter />
      </div>
    </>
  )
}

export default App
