import { Users } from "../components/Users";

export function Navbar({firstname}) {
    return (
        <nav className="w-full h-14 bg-slate-400 flex justify-between px-6">
            <div className="flex items-center px-4 text-2xl font-bold">PayTM App</div>
            <div className="flex justify-end items-center">
            <div><p className=" flex items-center px-4 text-2xl font-bold m-2">Welcome, {firstname}</p></div>
            <div className="flex items-center px-4 text-2xl font-bold m-2 bg-orange-500 rounded-md">Signup</div>
            </div>
        </nav>

    )
}

