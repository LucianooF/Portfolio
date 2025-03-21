import { lazy, Suspense } from 'react'
import './App.css'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

// Lazy loading components
const ContactUs = lazy(() => import('./assets/components/MailForm').then(module => ({ default: module.ContactUs })))

function AppContent() {
  const { translations, language, toggleLanguage } = useLanguage()
  
  return (
    <>
      <header>
        <div className='nav-section'>
          <div className='nav-content'>
            <div className='logo'>
              Portfolio
            </div>
            <nav className='menu-list'>
              <ul>
                <li>
                  <a href='#about_me' className='smoothscroll' aria-label='seccion sobre mi'>{translations.nav.whoAmI}</a>
                </li>
                <li>
                  <a href='#skills' aria-label='seccion de habilidades'>{translations.nav.skills}</a>
                </li>
                <li>
                  <a href='#projects' aria-label='seccion de proyectos'>{translations.nav.projects}</a>
                </li>
                <li>
                  <a href='#contact' aria-label='seccion de contacto'>{translations.nav.contact}</a>
                </li>
                <li>
                  <button 
                    onClick={toggleLanguage} 
                    className='language-btn'
                    aria-label='cambiar idioma'
                  >
                    {language === 'es' ? 'EN' : 'ES'}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className='container-class'>
        <div className='first_block'>
          <div className='avatar'></div>
          <div className='about_me_block'>
            <div className='container-dev-title'>
              <span className='text first-text'>Luciano Farias&nbsp;</span>
              <span className='text sec-text'>{translations.hero.role}</span>
            </div>
            <div className='about_me_text'>{translations.hero.description}</div>
            <div className='link_buttons'>
              <a href='https://www.linkedin.com/in/luciano-farias/' target='_blank' rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href='https://github.com/LucianooF' target='_blank' rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href='mailto:lucianofarias544@gmail.com'>
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <div>
              <a className='btn btn_blue' href='/CV_Luciano_Farias.pdf' download='CV Luciano Farias.pdf'>
                <i className="bi bi-download"></i>
                {translations.buttons.downloadCV}
              </a>
            </div>
          </div>
        </div>
        <div id='about_me'></div>
        <div className='about-me-section'>
          <h2 className='title_content'>{translations.sections.aboutMe}</h2>
          <div className='about-me-content'>
            <p>{translations.aboutMe.text1}</p>
            <p>{translations.aboutMe.text2}</p>
            <p>{translations.aboutMe.text3}</p>
            <p>{translations.aboutMe.text4}</p>
          </div>
        </div>
        <div id='skills'></div>
        <div className='skills_section'>
          <h2 className='title_content'>{translations.sections.skills}</h2>
          <div className='skills_content'>
            <h4>{translations.skills.frontend}</h4>
            <div className='tech_content'>
              <div className='icon_container'>
                <img src='/technologies/html5.svg'/>
                HTML5
              </div>
              <div className='icon_container'>
                <img src='/technologies/css3.svg'/>
                CSS3
              </div>
              <div className='icon_container'>
                <img src='/technologies/javascript.svg'/>
                JavaScript
              </div>
              <div className='icon_container'>
                <img src='/technologies/react.svg'/>
                React
              </div>
              <div className='icon_container'>
                <img src='/technologies/typescript.svg'/>
                TypeScript
              </div>
              <div className='icon_container'>
                <img src='/technologies/bootstrap.svg'/>
                BootStrap
              </div>
            </div>
            <h4>{translations.skills.backend}</h4>
            <div className='tech_content'>
              <div className='icon_container'>
                <img src='/technologies/node.svg'/>
                Node
              </div>
              <div className='icon_container'>
                <img src='/technologies/java.svg'/>
                Java
              </div>
              <div className='icon_container'>
                <img src='/technologies/python.svg'/>
                Python
              </div>
            </div>
            <h4>{translations.skills.databases}</h4>
            <div className='tech_content'>
              <div className='icon_container'>
                <img src='/technologies/postgresql.svg'/>
                PostgreSQL
              </div>
              <div className='icon_container'>
                <img src='/technologies/mysql.svg' />
                MySQL
              </div>
            </div>
            <h4>{translations.skills.otherTools}</h4>
            <div className='tech_content'>
              <div className='icon_container'>
                <img src='/technologies/wordpress.svg'/>
                Wordpress
              </div>
              <div className='icon_container'>
                <img src='/technologies/vitest.svg'/>
                Vitest
              </div>
              <div className='icon_container'>
                <img src='/technologies/git.svg'/>
                Git
              </div>
              <div className='icon_container'>
                <img src='/technologies/github.svg' style={{backgroundColor:'#fff'}} />
                GitHub
              </div>
              <div className='icon_container'>
                <img src='/technologies/figma.svg'/>
                Figma
              </div>
              <div className='icon_container'>
                <img src='/technologies/enterprise.jpg'/>
                EnterPrise Arquitect
              </div>
              <div className='icon_container'>
                <img src='/technologies/postman.svg'/>
                Postman
              </div>
            </div>
          </div>
        </div>
        <div id='projects'></div>
        <div className='projects_section'>
          <h2 className='title_content'>{translations.sections.projects}</h2>
          <div className='projects_container'>
            <div className='item_card'></div>
          </div>
        </div>
        <section id='contact'>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <ContactUs translations={translations.contact} />
          </Suspense>
        </section>
      </main>
      <footer>
        <div className='footer-section'>
          <p>{translations.footer}</p>
        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
