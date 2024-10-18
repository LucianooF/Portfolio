import './App.css'

function App() {
  
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
        <div id='first_block'>
          <div>Foto</div>
          <div className='container-dev-title'>
            <span className='text first-text'>Soy&nbsp; </span>
            <span className='text sec-text'>Desarrollador Web</span>
          </div>
          <div>lorem</div>
        </div>
        <div id='about_me'>about me</div>
        <div id='skills'>skills</div>
        <div id='projects'>projects</div>
        <div id='contact'>contact</div>
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
