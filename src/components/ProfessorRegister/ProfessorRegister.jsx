import {useState} from 'react'
import { useAuthValue } from '../../context/useAuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import {useNavigate} from 'react-router-dom'
import styles from './ProfessorRegister.module.css'

const ProfessorRegister = () => {
    const [professorName, setProfessorName] = useState("")
    const [dicipline, setDiscipline] = useState("")
    const [profile, setProfile] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const {user} = useAuthValue()
    const {insertDocument, response} = useInsertDocument("professor")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        //try url validate
        try{
            new URL(profile)
        }catch(error){
            setFormError("Foto de perfil não encontrada")
        }

        //array of tags
        const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        if(formError) return

        //check all values
        if(!professorName || !profile || !description || !body || !tags || !dicipline){
            setFormError("Preencha todos os campos")
        }

        //insetDocument
        insertDocument({
            professorName,
            dicipline,
            profile, 
            description,
            body,
            tagArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate("/teachers")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.title}>Registrar Professor</h3>
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
                        placeholder='Nome do Professor'
                        onChange={(e) => setProfessorName(e.target.value)}
                        value={professorName}
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
                        placeholder='Sobre o Professor'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </label>
                <label className={styles.label}>
                    <input
                        type="text"
                        placeholder='Diciplina'
                        onChange={(e) => setDiscipline(e.target.value)}
                        value={dicipline}
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

                {!response.loading && <input type='submit' value='Registrar Professor' className={styles.send} />}
                {response.loading && <input type='submit' value='Carregando...' className={styles.send} />}

                {response.error && <p>{response.error}</p>}
                {formError.error && <p>{response.error}</p>}
            </form>
        </div>
    )
}

export default ProfessorRegister
