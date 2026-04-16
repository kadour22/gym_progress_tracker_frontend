import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  { name: "Services", href: "#" },
  { name: "Schedule", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Plans", href: "#" },
  { name: "Contacts", href: "#" },
];
 
const handle_logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  window.location.href = '/'
}

const Navbar = () => {
  return (
    <div className='bg-[#0b0b0b] text-white'>
     <nav className="flex justify-between items-center px-4 md:px-10 py-6">
        <h1 className="text-xl font-bold tracking-widest">.TITAN</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link, i) => (
            <span>
                <Link key={i} to={link.href} className="hover:text-white transition">{link.name}</Link>
            </span>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-sm text-gray-300">
           { localStorage.getItem('access_token') ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link>}
          </button>
          { localStorage.getItem('access_token') && <button className="text-sm text-gray-300" onClick={handle_logout}>Logout</button> }
        </div>
      </nav>
    </div>
  )
}

export default Navbar