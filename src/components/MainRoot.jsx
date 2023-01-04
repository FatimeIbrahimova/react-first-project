import { OutlinedInput } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import MyCard from './MyCard'
import Navbar from './Navbar'

const MainRoot = () => {
    return (
        <>
            <Navbar />
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainRoot