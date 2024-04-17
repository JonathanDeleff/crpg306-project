"use client";
import Link from "next/link";

const Recipes = () => {
  return (
      <Link className="border-2 border-slate-400 p-1 m-1" href="/shoppingList">Recipes</Link>
  );
};

export default function Home() {

  

  return (
    <main className="pt-36 w-full flex">
      <Recipes />
    </main>
  )
}
