import styles from './NavbarDefault.module.css'
import logo2 from '../../Assets/adm2.webp'
import { Link, NavLink } from 'react-router-dom'
import { SlLogout } from 'react-icons/sl'
//hooks
import { useAuthentication } from '../../hooks/useAutentication'
import { useAuthValue } from '../../context/useAuthContext'

const NavbarDefault = () => {
    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/' className={styles.linklogo}>
                    <img src={logo2} alt="Escudo Adminitração" className={styles.logoimg} />
                    <span>2020-2022</span>
                </NavLink>
                {user && (
                    <span className={styles.name}> | {user.displayName}</span>
                )}
            </div>
            <div className={styles.linksContainer}>

                {/*show buttons of create and login for a user no registred */}
                {!user && (
                    <>
                        <NavLink to='/' className={styles.link}>Início</NavLink>
                        <NavLink to='/dev' className={styles.link}>Desenvolvedor</NavLink>
                        <NavLink to='/about' className={styles.link}>Sobre</NavLink>
                        <Link to='/login' className={styles.login}>Entrar</Link>
                        <Link to='/create' className={styles.create}>Criar conta</Link>
                    </>
                )}
                {/*pages for a logued user */}
                {user && (
                    <>
                        <Link to='/dash' className={styles.link}>Dashboard</Link>
                        <Link to='/class' className={styles.link}>Turma</Link>
                        <Link to='/teachers' className={styles.link}>Professores</Link>
                        <Link to='/dt' className={styles.link}>DT</Link>
                        <NavLink to='/dev' className={styles.link}>Desenvolvedor</NavLink>
                        <NavLink to='/about' className={styles.link}>Sobre</NavLink>
                    </>
                )}

            </div>
            {/*logout button */}
            {user && (
                <button onClick={logout} className={styles.logout}>
                    Sair
                    <SlLogout />
                </button>
            )}
        </nav>
    )
}

export default NavbarDefault
