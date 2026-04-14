import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserAPI } from '../../api/api';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await UserAPI.login({ username, password })

      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)

      navigate('/dashboard')

    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400" />
          <input type="password" placeholder="Password" className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400" />
          <button className="bg-lime-400 text-black py-3 rounded-full font-semibold mt-2" onClick={handleLogin}>Log in</button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account? <Link to="/register" className="text-lime-400 cursor-pointer">Register</Link>
        </p>
      </div>
    </div>
  );
}

