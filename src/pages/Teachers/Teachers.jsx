import styles from './Teachers.module.css'
//components
import ProfessorRegister from '../../components/ProfessorRegister/ProfessorRegister'
import Loader from '../../components/Loader/Loader'
//hooks
import { useAuthValue } from '../../context/useAuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

const Teachers = () => {
  const {user } = useAuthValue()
  const uid = user.id
  const {documents: professors, loading} = useFetchDocuments("professor", null, uid)



  return (
    <div className={styles.professors}>
      <h3>professores</h3>
      <div>
        {professors && professors.lenght === 0 ? <p> Houve um erro</p> : (
          <>
            <span>
              <h5>Professores:</h5>
            </span>
          </>
        )}

        {loading && <Loader />}
        {professors && professors.map((professor) => (
          <div className={styles.card} key={professor.id}>
          <div className={styles.img}>
            <img src={professor.profile} alt="" />
          </div>
          <div className={styles.text}>
            <p className={styles.name}>{professor.professorName}</p>
            <p key={professor.id}>{professor.description}</p>
            <p key={professor.id}>{professor.dicipline}</p>
          </div>
          <div className={styles.control}>
            <Link to={`/teachers/${professor.id}`} className={styles.link}>Detalhes
            <FaChevronRight />
            </Link>
          </div>
        </div>
        ))}
      </div>
      <ProfessorRegister />
    </div>
  )
}

export default Teachers
