import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <nav>
            <Link to='/register'>Register</Link>
            <Link to='/login'>login</Link>
            <Link to='/home'> home</Link>
        </nav>
    </>
  )
}
