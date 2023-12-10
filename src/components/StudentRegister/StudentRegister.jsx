import React, { useState } from 'react'
import { useAuthValue } from '../../context/useAuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useNavigate } from 'react-router-dom'
import styles from './StudentRegister.module.css'


const StudentRegister = () => {
    const [studentName, setStudentName] = useState("")
    const [profile, setProfile] = useState("")
    const [description, setDescription] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("students")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        //url image validation
        try {
            new URL(profile)
        } catch (error) {
            setFormError("Não foi possível resgatar a imagem")
        }

        //array of tags
        const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        if (formError) return

        //check all values
        if (!studentName || !profile || !description || !body || !tags) {
            setFormError("Por favor preencha todos os campos")
        }


        //insert document 
        insertDocument({
            studentName,
            profile,
            description,
            body,
            tagArray,
            uid: user.uid,
            createdBy: user.displayName
        })
        console.log(profile)

        navigate("/")
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


export default StudentRegister
