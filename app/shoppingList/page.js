"use client";

import { useUserAuth } from "../_utils/auth-context";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Page() {
  
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();
  
  function handleSignIn(){
    googleSignIn();
  }
  
  function handleSignOut(){
    firebaseSignOut();
  }
 
  const Recipes = () => {
    return (
        <Link className="border-2 border-slate-400 p-1 m-1" href="/shoppingList/shoppingPage">shopping List</Link>
    );
  };

  return(
    <main className="flex flex-col min-h-screen w-screen">
      <Header />
      <div className="flex flex-1 items-center justify-center"> {/* This div centers its children vertically and horizontally */}
        {!user && (
          <button className="border-2 border-sky-300 p-2 m-1 rounded-full" onClick={handleSignIn}>
            Sign in with Google
          </button>
        )}
        {user && (
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl">Welcome {user.displayName}</p>
            <Recipes />
            <button className="border-2 border-sky-300 p-1 m-1 rounded-full" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
