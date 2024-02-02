
import { useState } from "react"
import RegisterFrom from "./layout/registerFrom"
import LoginFrom from "./layout/loginFrom"
import AppRoute from "./routes/appRoute";
import useAuth from "./hooks/useAuth";

function App() {

  const { loading, theme } = useAuth();

  if(loading){
    return (
      <p className="text-4xl text-primary">Loading...</p>
    )
  }

  return (
    <div data-theme={theme ? "dark" : "light"} className="min-h-screen">
      <AppRoute />
      {/* <h1 className="text-3xl font-itim text-center border-pink-900 border-[3px] py-5 rounded-lg mx-4 bg-green-300 shadow-lg text-pink-400 font-bold">
        Hello world!
      </h1>
      <div className="flex justify-end px-6">
        <label className="my-auto">Dark</label>
        <input type="checkbox" onChange={ () => setTheme((prev) => !prev) } className="toggle theme-controller m-2" />
        <label className="my-auto">Light</label>
      </div>
      <hr />

      Register Form

      <div className="my-4 flex gap-4 p-4 mt-5 rounded-md shadow-md flex-col w-4/6 min-w-[500px] mx-auto border">
        <h2 className="text-[25px] font-bold">Register From</h2>
        <RegisterFrom />
      </div>

      Login Form

      <div className="my-4 flex gap-4 p-4 mt-5 rounded-md shadow-md flex-col w-4/6 min-w-[500px] mx-auto border">
        <h2 className="text-[25px] font-bold">Login From</h2>
        <LoginFrom />
      </div> */}
    </div>
  )
}

export default App
