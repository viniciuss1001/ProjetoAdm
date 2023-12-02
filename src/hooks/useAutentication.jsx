//hook de autenticação do usuário
import { db } from '../firebase/Config'
//dependências para a autenticação usando o firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    //praticidade ao usar o log
    const log = console.log


    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //para evitar o vazamento de memória
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function chechIsIsCancelled() {
        if(cancelled){
            return
        }
    }

    //função para a criação do usuário
    const createuser = async (data) => {
        chechIsIsCancelled()

        setLoading(true)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth, 
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName,
            })
            setLoading(false)
            return user


        }catch(error){
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres"
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "Email já cadastrado"
            }else{
                systemErrorMessage = "Ocorreu um erro no sistema, por favor tente mais tarde"
            }
            setError(systemErrorMessage)
        }
        setLoading(false)
    } 

    //para fazer o logout da aplicação 

    const logout = ( ) =>{
        chechIsIsCancelled()
        signOut(auth)
    }

    //login do usuário
    const login = async (data)=> {
        setLoading(false)
        setError(false)

        try {
            await signInWithEmailAndPassword(
                auth, data.email, data.password
            )
        } catch (error) {
            log(error.message)
            log(typeof error.message)
            log(error.message.includes("user-not"))

            let systemErrorMessage;

            if (error.message.includes("user-not-found")){
                systemErrorMessage = "Usuário não encontrado"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta, favor revisar"
            }else{
                systemErrorMessage = "Houve um erro, por favor tente novamente em alguns instantes"
            }
            log(systemErrorMessage)
            setError(systemErrorMessage)
        }

        setLoading(false)
        log(error)
    }

    //logout do usuário
    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return{
        auth,
        createuser,
        error,
        logout,
        login,
        loading
    }
}