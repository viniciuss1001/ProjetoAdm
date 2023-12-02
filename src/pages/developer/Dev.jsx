import { Link, NavLink } from 'react-router-dom'
//style
import styles from './Dev.module.css'
//components
import NavbarDev from './Components/Navbar/NavbarDev'
import dev from './Assets/Dev.jpg'
//icons
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const Dev = () => {
  return (
    <div className={styles.div}>
      <NavbarDev />
      <img src={dev} alt='Vinícius Frota' className={styles.img}/>
      <h1 className={styles.title}>Olá, sou Vinícius Frota</h1>
      <h4 className={styles.subtitle}>FullStack Webdeveloper</h4>
      <p className={styles.text}>
        Vinícius, estudante dedicado de TI, destaca-se pela iniciativa de criar projetos inovadores. Sua mais recente contribuição consiste em uma plataforma que reúne sua antiga turma de administração, promovendo interação e colaboração online de forma eficaz.
      </p>
      <div className={styles.linkcont}>
        <Link to='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZzXkvJXlnfXBntTDZpqCVjQhJFSdNfZpsRffrNrXCNjqDqsjLDQZtGVrvcjNlfvJtpdq'>
          Email <MdEmail />
        </Link >
        <Link to='https://github.com/viniciuss1001'>
          GitGub <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default Dev
