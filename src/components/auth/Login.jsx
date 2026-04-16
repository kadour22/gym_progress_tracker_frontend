import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserAPI } from '../../api/api';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('access_token')
    if (user) {
      navigate('/dashboard')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await UserAPI.login({ username, password })

      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)

      navigate('/dashboard')

    } catch (error) {
      console.error('Login failed', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h1>

        <form className="flex flex-col gap-4">
          <input
          type="text"
          placeholder="Username"
          className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400"
          onChange={(e) => setUsername(e.target.value)}
          />
          <input
          type="password"
          placeholder="Password"
          className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-lime-400" 
          onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-lime-400 text-black py-3 rounded-full font-semibold mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Logging in...
              </>
            ) : (
              'Log in'
            )}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account? <Link to="/register" className="text-lime-400 cursor-pointer">Register</Link>
        </p>
      </div>
    </div>
  );
}