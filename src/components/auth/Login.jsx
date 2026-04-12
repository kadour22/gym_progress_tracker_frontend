import React from 'react'
import { Link } from 'react-router-dom';
export function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>

        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400" />
          <input type="password" placeholder="Password" className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400" />
          <button className="bg-lime-400 text-black py-3 rounded-full font-semibold mt-2">Log in</button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account? <Link to="/register" className="text-lime-400 cursor-pointer">Register</Link>
        </p>
      </div>
    </div>
  );
}

