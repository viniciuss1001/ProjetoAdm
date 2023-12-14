import styles from './Class.module.css'
import StudentRegister from '../../components/StudentRegister/StudentRegister'
//page for visualize my class
import { useAuthValue } from '../../context/useAuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import Loader from '../../components/Loader/Loader'
import { PiStudentFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'


const Class = () => {
  const { user } = useAuthValue()
  const uid = user.id

  const { documents: students, loading } = useFetchDocuments("students", null, uid)
  return (
    <div className={styles.students}>
      <PiStudentFill className={styles.icon} />
      <h3 className={styles.title}>Conheça a turma abaixo</h3>
      <div className={styles.container}>
        {students && students.lenth === 0 ? <p>Houve um erro!</p> : (
          <>
            <span>
              <h5 className={styles.classmates}>Estudantes</h5>
            </span>
          </>
        )}
        {loading && <Loader />}
        {students && students.map((student) => (
          <div className={styles.card} key={student.id}>
            <div className={styles.img}>
              <img src={student.profile} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.name}>{student.studentName}</p>
              <p key={student.id}>{student.description}</p>

            </div>
            <div className={styles.control}>
              <Link to={`/student/${student.id}`} className={styles.link}>Detalhes
              <FaChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <StudentRegister />
    </div>
  )
}

export default Class
