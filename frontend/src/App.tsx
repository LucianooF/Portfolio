import './App.css'
import { ContactUs } from './assets/components/MailForm.jsx'

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
                  <a href='#about_me' className='smoothscroll' aria-label='seccion sobre mi'>¿Quién soy?</a>
                </li>
                <li>
                  <a href='#skills' aria-label='seccion de habilidades'>Habilidades</a>
                </li>
                <li>
                  <a href='#projects' aria-label='seccion de proyectos'>Proyectos</a>
                </li>
                <li>
                  <a href='#contact' aria-label='seccion de contacto'>Contacto</a>
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
            <div className='about_me_text'>Soy Luciano Farias, programador con un nivel de ingles C1 ,me dedico al desarrollo web enfocado en las buenas prácticas y metodologías ágiles para brindar resultados de calidad.</div>
            <div className='link_buttons'>
              <a href='https://www.linkedin.com/in/luciano-farias/' target='_blank'><i className="bi bi-linkedin"></i></a>
              <a href='https://github.com/LucianooF' target='_blank'><i className="bi bi-github"></i></a>
              <a href='mailto:lucianofarias544@gmail.com'>
              <i className="bi bi-envelope"></i>
              </a>
            </div>
            <div>
              <a className='btn btn_blue' href='/CV_Luciano_Farias.pdf' download='CV Luciano Farias.pdf'>
              Descargar CV
              <i className="bi bi-file-earmark-arrow-down-fill" style={{fontSize:'20px', marginLeft:'5px'}} ></i>
              </a>
            </div>
          </div>
        </div>
        
        <div id='about_me'></div>
        <div className='about-me-section'>
          <h2 className='title_content'>Sobre mi</h2>
          <div className='about-me-content'>
            <p>Hola, soy Luciano Farias, tengo 25 años, soy de Argentina, estudie durante 3 años Licenciatura Gestion de Tecnologias de la Informacion</p>
            <p>Tengo experiencia desarrollando en Front y Back, y junto al conocimiento que adquiri en mi paso por la Universidad, soy capaz de desenvolverme como Fullstack</p>
            <p> </p>
            <p>Busco un equipo donde pueda aportar mi granito de arena y seguir mejorando mi nivel como Desarrollador</p>
            </div>
        </div>
        <div id='skills'></div>
        <div className='skills_section'>
          <h2 className='title_content'>Habilidades</h2>
          <div className='skills_content'>
            <h4>Frontend</h4>
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
            <h4>Backend</h4>
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
            <h4>Base de Datos</h4>
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
            <h4>Otras Herramientas</h4>
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
          <h2 className='title_content'>Proyectos</h2>
          <div className='projects_container'>
            <div className='item_card'></div>
          </div>

        </div>
        <div id='contact'></div>
        <div className='contact_section'>
          <h2 className='title_content'>Contacto</h2>
          <div className='contact_content'>
            <div className='form_container'>
               {/* <form className='form_contact'>
                <input type='text' placeholder='Nombre'></input>
                <input type='email' placeholder='correo@mail.com'></input>
                <textarea name='message' placeholder='Quiero contactarte'></textarea>
               <button >
                <i className="bi bi-send"></i>
                Enviar
                </button>
              </form> */}
              <ContactUs></ContactUs>

            </div>
            
          </div>

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
