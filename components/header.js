import Link from "next/link";

const HomeButton = () => {
    return (
        <Link className="underline" href="/">Home</Link>
    );

} 

const ShoppingList = () => {
    return (
        <Link className="p-3 underline" href="/shoppingList"><p>Shopping List</p></Link>
    );

} 

export const Login = () => {
    return (
        <Link className="p-3 underline" href="/shoppingList"><p>Login</p></Link>
    );

}

export const Header = () => {
    return (
        <div className="flex justify-start items-center w-full h-16 bg-sky-200 text-black border-b-4 p-2 border-slate-300">
            <HomeButton/>
            <ShoppingList/>
        </div>
    );
}