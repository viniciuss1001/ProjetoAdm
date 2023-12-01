import React from 'react'
import { useEffect, useState } from 'react'
import {AnimatePresence} from 'framer-motion'

//another navbars
import NavbarDefault from './NavbarDefault'
import NavbarFixed from './NavbarFixed'


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    
    const handleScroll = ()=>{
        if(window.scrollY >= 400){
            setIsScrolled(true)
            console.log("página scrollada")
        }else{
            setIsScrolled(false)
            console.log("página não scrollada")
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>window.removeEventListener('scroll', handleScroll)
    },[])


    return (
        <>
            <AnimatePresence>
                {isScrolled == true ? (<NavbarFixed key='fixed' />) : (<NavbarDefault />)}
            </AnimatePresence>
        </>
    )
}

export default Navbar
