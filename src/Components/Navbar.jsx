import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = [
        {
            title: "HomePage",
            path: '/'
        },
        {
            title: "Products",
            path: '/products'
        },
        {
            title: "Cart",
            path: '/cart'
        },
        {
            title: "Login",
            path: '/login'
        }
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {links.map((link) => {
                return <Link key={link.path} to={link.path}>{link.title}</Link>
            })}
        </div>
    )
}

export default Navbar;