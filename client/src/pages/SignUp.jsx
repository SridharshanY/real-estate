import axios from "axios"
import { set } from "mongoose"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.post('/api/auth/signUp', formData)
    const data = await res.data
    if(data.success === false) {
      setError(data.message)
      setLoading(false)
      return
    }
    setLoading(false)
}

  console.log(formData)

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChange} type="text" placeholder='Username' className='border p-3 rounded-lg' id="username" />
        <input onChange={handleChange} type="email" placeholder='Email ID' className='border p-3 rounded-lg' id="email" />
        <input onChange={handleChange} type="password" placeholder='Password' className='border p-3 rounded-lg' id="password" />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <a onClick={()=>navigate('/signIn')} className="text-blue-700 hover:text-blue-800 hover:cursor-pointer">Sign In</a>
      </div>
    </div>
  )
}

export default SignUp
