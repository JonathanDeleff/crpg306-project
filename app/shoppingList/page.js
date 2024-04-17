"use client";
import { useUserAuth } from "@/app/_utils/auth-context";



export default function Home() {

  const { user, googleSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    googleSignIn();
  };

  function handleSignOut(){
    firebaseSignOut();
  }

  return (
    <main className="pt-36 w-full flex justify-center">
      {! user && <button onClick={handleSignIn} className="mx-auto border-4 bg-sky-300 text-black rounded-full">Sign In with google</button>}
      {user && (
        <main className="pt-36 flex justify-center items-center flex-col">
          <p className="text-xl">Welcome {user.displayName}</p>
          <button className="border-2 border-sky-300 p-1 m-1" onClick={handleSignOut}>Sign out</button>
        </main>
      )}
    </main>
  )
}
