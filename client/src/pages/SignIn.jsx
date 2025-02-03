import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signInStart, signInSuccess, signInFailure } from "../redux/userSlice"

const SignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector(state => state.user)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signInStart())
    try{
      await axios.post('/api/auth/signin', formData)
      dispatch(signInSuccess(formData))
      alert('Signed In successfully')
      navigate('/')
    }
    catch(error){
      dispatch(signInFailure(error.response.statusText))
      console.log(error);
      
    }
}

  console.log(formData)

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleChange} type="email" placeholder='Email ID' className='border p-3 rounded-lg' id="email" required />
        <input onChange={handleChange} type="password" placeholder='Password' className='border p-3 rounded-lg' id="password" required />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Need an account?</p>
        <a onClick={()=>navigate('/signUp')} className="text-blue-700 hover:text-blue-800 hover:cursor-pointer">Sign Up</a>
      </div>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  )
}

export default SignIn
