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

const Teacher = () => {
    const {user} = useAuthValue()
    const uid = user.uid;
    const {id} = useParams()

    const {document: teacher, loading} = useFetchDocument("professor", id)

  return (
    <div>
      professor individual
    </div>
  )
}

export default Teacher
