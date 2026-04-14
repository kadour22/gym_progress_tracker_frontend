import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  { name: "Services", href: "#" },
  { name: "Schedule", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Plans", href: "#" },
  { name: "Contacts", href: "#" },
];
 
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
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Try for free
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar