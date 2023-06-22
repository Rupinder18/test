import { AppBar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <AppBar >
            <NavLink style={{textDecoration:'none',color:"#FFFFFF",fontSize:20}} to="/users">Users</NavLink>
            <NavLink style={{textDecoration:'none',color:"#FFFFFF",fontSize:20}} to='/posts'>Posts</NavLink>
        </AppBar>
    </div>
  )
}

export default Home