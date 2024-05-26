const Login = () => {
  return (
    <div className=" flex justify-center bg-gradient-to-r min-h-screen items-center">
      <div className=" w-1/4 min-w-96 px-10 py-8 rounded-2xl border-solid border-slate-300 border-2">
        <form action="">
          <h1 className=" text-4xl text-center text-white">Login</h1>
          <div className=" w-full h-12 my-7">
            <input className=" w-full h-full bg-transparent outline-none border-solid border-slate-300 border-2
             rounded-xl placeholder:text-white
              text-white px-6 
              " type="text" placeholder="Username" required />
          </div>
          <div className="w-full h-12 my-7">
            <input  className=" w-full h-full bg-transparent outline-none border-solid border-slate-300 
            border-2 border-r rounded-xl
            placeholder:text-white px-6 text-white" type="password" placeholder="Password" required />
          </div>
          <div className="flex justify-center mx-auto
           border-slate-300 border-2 bg-pink-600 border-none
            h-10 rounded-xl text-white
             
           ">
          <button type="submit" className=" text-white w-11/12">
            Login
          </button>
          </div>
          <div className=" text-white flex-col justify-between">
            <p>
              Don't have account?  <a href="">Register</a>
            </p>
            <a className=" text-white" href="#">Forgot password?</a>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  )
}

export default Login