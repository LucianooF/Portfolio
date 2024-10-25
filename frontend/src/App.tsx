import './App.css'

function App() {
  
  return (
    <>
      <header>
        <div className='nav-section'>
          <div className='nav-content'>
            <div className='logo'>
              Portfolio(work in progress)
            </div>
            <nav className='menu-list'>
              <ul>
                <li>
                  <a aria-label='seccion sobre mi'>¿Quién soy?</a>
                </li>
                <li>
                  <a aria-label='seccion de habilidades'>Habilidades</a>
                </li>
                <li>
                  <a aria-label='seccion de proyectos'>Proyectos</a>
                </li>
                <li>
                  <a aria-label='seccion de contacto'>Contacto</a>
                </li>
                <li>Flag</li>
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
              <span className='text first-text'>Luciano Farias&nbsp; </span>
              <span className='text sec-text'>Desarrollador Web</span>
            </div>
            <div>Soy Luciano Farias, programador con un nivel de ingles C1 ,me dedico al desarrollo web enfocado en las buenas prácticas y metodologías ágiles para brindar resultados de calidad.</div>
          </div>
        </div>
        
        <div id='about_me'></div>
        <div className='about-me-section'>
          <h2 className='title_content'>Sobre mi</h2>
          <div className='about-me-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin ultricies metus at pulvinar. In laoreet justo enim, at congue nibh ultricies et. Duis rhoncus interdum ipsum, et rhoncus nulla efficitur et. Maecenas erat enim, auctor et pharetra non, fermentum et est. Quisque semper lobortis lectus, ac dapibus tortor. Nullam nec aliquet orci. Nullam dapibus finibus sollicitudin. Curabitur sagittis eros eu pharetra congue. Nulla elementum ullamcorper augue quis dignissim.</div>
        </div>
        <div id='skills'></div>
        <div className='skills_section'>
          <h2 className='title_content'>Habilidades</h2>
          <div className='skills_content'>
            <h4>Frontend</h4>
            <div className='tech_content'>
              <div className='icon_container'>
                
              </div>
            </div>
            <h4>Backend</h4>
            <div className='tech_content'>
              <div className='icon_container'></div>
            </div>
          </div>
        </div>
        <div id='projects'></div>
        <div className='projects_section'>
          <h2 className='title_content'>Proyectos</h2>
          <div className='projects_container'>
            <div className='item_card'></div>
          </div>

        </div>
        <div id='contact'></div>
        <div className='contact_section'>
          <h2>Contacto</h2>
        </div>
        <div></div>
        <div></div>
      </main>
      <footer>
        <div className='footer-section'>
          <p>© Luciano Farias | Fullstack Developer</p>
        </div>
      </footer>
    </>
  )
}

export default App
