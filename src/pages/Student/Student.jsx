import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useAuthValue } from '../../context/useAuthContext'
import { Link } from 'react-router-dom'
//components
import Loader from '../../components/Loader/Loader'
//style
import styles from './Student.module.css'
//icons
import { FiChevronLeft } from 'react-icons/fi'
import { BsPencilSquare } from 'react-icons/bs'

const Student = () => {
    const { user } = useAuthValue()
    const uid = user.uid

    const { id } = useParams()
    const { document: student, loading } = useFetchDocument("students", id)
    return (
        <div className={styles.student}>
            {loading && <Loader />}
            {student && (
                <div className={styles.container}>
                    <Link to='/class'>
                        <FiChevronLeft className={styles.icon} />
                    </Link>
                    <img src={student.profile} alt="" className={styles.profile} />
                    <h1 className={styles.title} key={student.id}>{student.studentName}</h1>
                    <h3 className={styles.desc}>{student.description}</h3>
                    <p className={styles.bodytitle}>Sobre o Aluno:</p>
                    <p key={student.body}>{student.body}</p>
                    <div>
                        <p className={styles.bodytitle}>Tags:</p>
                        {student.tagArray.map((tag) => (
                            <span key={tag.id} className={styles.tag}> #{tag}</span>
                        ))}
                    </div>
                    {/*
                    <Link to={`/student/edit/${student.id}`} className={styles.edit}>
                        <BsPencilSquare /> Editar
                    </Link>
                    {console.log(student.id)}
                    */}
                    
                </div>
            )}
        </div>
    )
}

export default Student
