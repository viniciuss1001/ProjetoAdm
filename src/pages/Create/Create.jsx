import {useState, useEffect} from 'react'
import styles from './Create.module.css'//style
import { useAuthentication } from '../../hooks/useAutentication'//hook de autenticação
import { Link } from 'react-router-dom'
import img from './LocalAssets/adm.jpg'
import { auth } from '../../firebase/Config'


const Create = () => {

    //register user
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [error, setError]= useState("")


    //export data from hook
    const {createuser, error: authError, loading} = useAuthentication()

    //function for create a user
    const handleSubmit = async (e)  =>{
        e.preventDefault()
        setError("")

        //create a user
        const user = {
            displayName, 
            email,
            password,
            confirmPass
        }

        //verification password
        if(password !== confirmPass){
            setError("As senhas não coincidem")
            return
        }

        const res = await createuser(user)
        console.log(user)
        //inputs value reset
        setEmail("")
        setDisplayName("")
        setPassword("")
        setConfirmPass("")
    }

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.container}>
            <div className={styles.divimg}>
                <img src={img} alt="Capa login" className={styles.img}/>
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>Olá <span>adm!</span> Seja bem-vindo!</h3>
                <p>Crie sua conta e conheça essa turma!</p>
                <form onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Nome:
                        <input 
                        type="text"
                        value={displayName}
                        required
                        placeholder="Nome"
                        onChange={(e) => setDisplayName(e.target.value)}
                        className={styles.input}
                        />
                    </label>
                    <label  className={styles.label}>
                        Email:
                        <input 
                        type="email" 
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        />
                    </label>
                    <label  className={styles.label}>
                        Senha:
                        <input 
                        type="password" 
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className={styles.input}
                        />
                    </label>
                    <label className={styles.label} >
                        Confirmar senha:
                        <input 
                        type="password" 
                        placeholder='Confirmar Senha'
                        required
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)} 
                        className={styles.input}
                        />
                    </label>
                    <p className={styles.enter}>Já tem uma conta criada? <Link to='/login'>Entre</Link></p>
                    {error && <p>{error}</p>}
                    {!loading && <input type='submit' value='Criar Conta' className={styles.btn}/>}
                    {loading && <input type='submit' disabled value='carregando...' className={styles.btn} />}
                </form>
            </div>
        </div>
    )
}

export default Create
