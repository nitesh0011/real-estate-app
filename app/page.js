'use client'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Companies from "./components/companies"
import Residencies from "./components/Residencies"
export default function Home() {
  return (
    <div className="w-screen h-screen">
         <Navbar/>
         <Hero/>
         <Companies/>
         <Residencies/>
    </div>
  )
}
