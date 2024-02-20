import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
export default function Navbar() {
  console.log("I AM IN THE MAIN FUNCTION")
  const[data,setdata]=useState("")
  const handleclick =()=>{
    console.log("I AM NEAR TO SETDATA ")
    setdata("")
  }
  return (
<>
{console.log("i am in the return function ")}
<header className="sticky inset-0 z-50  bg-gradient-to-t from-gray-900/80 to-slate-200/80 ...  top-0 w-full shadow-md">
    <nav className="container mx-auto px-6 py-3">
    <div className="mt-4">
    <div action="" className="flex items-center space-x-2">
    <Link to="" className=" transition-transform duration-200 ease-in-out hover:scale-[1.05] text-2xl font-bold text-white hover:text-orange-600">NEWAPP</Link>
    <input type="search" onChange={(e)=>{setdata(e.target.value)}} value={data} placeholder="Search News from keyword "className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600 w-full"/>
    <Link to={"/q="+data} onClick={handleclick} className="bg-black text-white shadow-md shadow-orange-400/50 px-4 py-2 rounded-md transition-transform duration-200 ease-in-out hover:scale-[1.03]">Search</Link>
    </div>
    </div>
    </nav>
</header>
    </>
  )
}
