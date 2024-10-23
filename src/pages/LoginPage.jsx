import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center gap-2 flex-col">
        <h2 class="text-xl font-bold">Login Page</h2>
        <img src="/earth_lentes.svg" alt="world" className="h-32 w-32 my-10" />
      <p>is under construction too!</p>
    </div>
  )
  return (
    <div className="flex-1 flex justify-center items-center p-10">
      <div className="flex flex-col gap-4 min-h-[400px] rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center">Welcome again</h1>
        <p className="text-center">Please login to continue your trip</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <Link to="/register" className="text-blue-950 text-sm text-right underline">¿Forgot password?</Link>
        </form>
        <button className="bg-blue-950 text-white p-2 rounded-lg">Login</button>
          <Link to="/register" className="text-blue-950 text-sm text-center">Create an account</Link>
        <section>
          <span className="flex gap-2 px-2">
            <hr />
            <p className="text-center text-xs">Or login with</p>
            <hr />
          </span>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-900 text-white p-2 rounded-lg w-10 h-10">F</button>
            <button className="bg-red-600 text-white p-2 rounded-lg w-10 h-10">G</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LoginPage