import styles from './StudentEdit.module.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/useAuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

const StudentEdic = () => {
    const { id } = useParams()
    const { document: student, loading } = useFetchDocument("students", id)

    //the content of student with usestate
    const [studentName, setStudentName] = useState("")
    const [profile, setProfile] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument("students")
    const navigate = useNavigate()

    useEffect(() => {
        if (student) {
            setStudentName(student.studentName)
            setProfile(student.profile)
            setDescription(student.description)
            setBody(student.body)

            const textTags = student.tagArray.join(",")

            setTags(textTags)
        }
    }, [student])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        //url validation
        try {
            new URL(profile)
        } catch (error) {
            console.log(error)
        }

        //create tag array
        const arrayTag = tags.split(",").map((tag) => tag.trim().toLowerCase())

        //check all values
        if (!studentName || !profile || !description || !body || !tags) {
            setFormError("Por favor preencha todos os campos")
        }

        const data = {
            studentName,
            profile,
            body,
            description,
            arrayTag,
            uid: user.id,
            createdBy: user.displayName
        }

        updateDocument(id, data)
    }


    return (
        <div>
            {/*form to register students */}
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.title}>Registrar Aluno</h3>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Url do perfil'
                        onChange={(e) => setProfile(e.target.value)}
                        value={profile}
                    />
                </label>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Nome do Aluno'
                        onChange={(e) => setStudentName(e.target.value)}
                        value={studentName}
                    />
                </label>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Descrição'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Sobre o aluno'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Tags'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>

                {!response.loading && <input type='submit' value='Registrar aluno' className={styles.send} />}
                {response.loading && <input type='submit' value='Carregando...' className={styles.send} />}

                {response.error && <p>{response.error}</p>}
                {formError.error && <p>{response.error}</p>}
            </form>
        </div>
    )
}

export default StudentEdic
