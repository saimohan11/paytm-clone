import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Warning } from "../components/Warning";

export function Signin() {
    return (
        <div className="flex justify-center w-full h-screen py-20 bg-white">
            <div className="w-96 bg-slate-400 border-4 border-stone-600">
            <Heading label={"Signin"}/>
            <SubHeading label="Enter your details to login into your account"/>
            <InputBox label={"username"} type={"text"} placeholder={"John3@gmail.com"} onChange={()=>{
            }}/>
            <InputBox label={"password"} type={"text"} placeholder={"pass@123"}/>
            <Button label={"Sign in"}/>
            <Warning label={"Do you have an account?"} buttontext={"signup"} to={"/signup"}/>
            </div>
        </div>
    )
}