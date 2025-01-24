import { Users } from "../components/Users";
import { Navbar } from "./Navbar";

export function Dashboard() {
    return (
        <>
            <Navbar/>
            <Users balance={"10,000"}/>
        </>
    )
}