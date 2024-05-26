const SignUp = () => {
	return (
	 <div className="flex flex-col justify-center items-center bg-gradient-to-r min-h-screen">
		<div>
			<h1 className="text-4xl text-center text-white">Create an account</h1>
			<p className="text-center text-white">Already have an account? <a href="#">Log in</a></p>
		</div>
		<div className=" mt-8  w-1/3 min-w-96 px-10 py-8 rounded-2xl ">
			<form action="" >
				<div className="text-white">
					<label className="block" htmlFor="">What should we call you</label>
					<input className="h-10 block w-full bg-transparent border-solid  border-2
					rounded-lg border-slate-300
					 px-6 text-white" type="text" placeholder="Enter your profile name" />
				</div>
				<div className="mt-5 text-white">
					<label className="block" htmlFor="">What should we call you</label>
					<input className=" h-10 block w-full bg-transparent border-solid  border-2
					rounded-lg border-slate-300
					 px-6 text-white" type="text" placeholder="Enter your email address" />
				</div>
				<div className="mt-5 text-white">
					<label className="block" htmlFor="">What should we call you</label>
					<input className="h-10 block w-full bg-transparent border-solid border-2
					rounded-lg border-slate-300
					 px-6 text-white" type="text" placeholder="Enter your password" />
					<p>Use 8 or more characters with a mix of letters, numbers</p>
				</div>
				<div className="mt-6 text-white">
					<p>By creating an account, you agree to the Terms of use and Privacy Policy.</p>
					<div className="flex justify-center mx-auto
           border-white border-2 bg-pink-600 border-none
            h-10 rounded-xl text-white">
						<button>Create an account</button>
					</div>
				</div>
			</form>
		</div>
		<div></div>
	 </div>
	)
  }
  
  export default SignUp