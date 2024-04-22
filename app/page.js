"use client";
import { Header } from "@/components/header";
import { Login } from "@/components/buttons";



export default function Home() {

  

  return (
    <main className="w-screen h-screen">
      <Header/>
      <div className="flex flex-col w-full h-full text-center items-center justify-center">
        <p className="pb-2">Welcome to the shopping list</p>
        <Login/>
      </div>
    </main>
    
  )
}
