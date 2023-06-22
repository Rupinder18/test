import React from 'react'
import Table from '../table/Table'
import { NavLink } from 'react-router-dom';

const Users = () => {
  
  return (
    <div>
      <NavLink to='/newuser'>Create New User</NavLink>
        
    <Table/>
    </div>
  )
}

export default Users