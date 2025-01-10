import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id="username" />
        <input type="email" placeholder='Email ID' className='border p-3 rounded-lg' id="email" />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id="password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <a onClick={()=>navigate('/signIn')} className="text-blue-700 hover:text-blue-800 hover:cursor-pointer">Sign In</a>
      </div>
    </div>
  )
}

export default SignUp
