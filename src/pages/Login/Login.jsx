import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAutentication"
import styles from './Login.module.css'
//icons
import { IoPerson } from 'react-icons/io5'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      email,
      password
    }

    const res = await login(user)
  }
  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <IoPerson className={styles.icon} />
        <h2 className={styles.title}>Entrar</h2>
        <p className={styles.subtitle}>Entre na sua conta e volte a interagir com seus colegas!</p>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            Email:
            <input type="email"
              placeholder="Email"
              required
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Senha:
            <input type="password"
              placeholder="Senha"
              required
              value={password}
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p>{error}</p>}
          {!loading && <input type="submit" value='Entrar' className={styles.btn} />}
          {loading && <input type="submit" value='Aguarde' disabled className={styles.btn} />}
        </form>
      </div>
    </section>

  )
}

export default Login
