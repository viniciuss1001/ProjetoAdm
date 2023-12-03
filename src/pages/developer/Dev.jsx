import { Link, NavLink } from 'react-router-dom'
//style
import styles from './Dev.module.css'
import bg from './Assets/back.jpg'
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
      <h1 className={styles.title}>Olá, sou <span>Vinícius Frota</span></h1>
      <h4 className={styles.subtitle}><span>FullStack</span> Web Developer</h4>
      <div className={styles.linkcont}>
        <Link 
        className={styles.email}
        to='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZzXkvJXlnfXBntTDZpqCVjQhJFSdNfZpsRffrNrXCNjqDqsjLDQZtGVrvcjNlfvJtpdq'>
          Email <MdEmail />
        </Link >
        <Link 
        className={styles.github}
        to='https://github.com/viniciuss1001'>
          GitHub <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default Dev
