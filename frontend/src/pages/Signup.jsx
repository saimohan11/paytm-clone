import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Warning } from "../components/Warning";

export function Signup() {
    return (
        <div className="flex justify-center w-full h-screen py-20 bg-white">
            <div className="w-96 bg-slate-400 border-4 border-stone-600">
            <Heading label={"Signup"}/>
            <SubHeading label="Enter your information to create an account"/>
            <InputBox label={"firstname"} placeholder={"John"}/>
            <InputBox label={"Email"} placeholder={"John3@gmail.com"}/>
            <InputBox label={"password"} placeholder={"pass@123"}/>
            <Button label={"Signup"}/>
            <Warning label={"Already have an account?"} buttontext={"signin"} to={"/signin"}/>
            </div>
        </div>
    )
}