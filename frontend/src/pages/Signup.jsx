import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Warning } from "../components/Warning";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [firstname,setFirstName] = useState("");
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="flex justify-center w-full h-screen py-20 bg-white">
            <div className="w-96 bg-slate-400 border-4 border-stone-600">
            <Heading label={"Signup"}/>
            <SubHeading label="Enter your information to create an account"/>
            <InputBox label={"Firstname"} type={"text"} placeholder={"John"} onChange = {(e)=>{
                setFirstName(e.target.value);
            }}/>
            <InputBox label={"Username"} type={"text"} placeholder={"John3@gmail.com"} onChange={e => {
                setUserName(e.target.value);
            }}/>
            <InputBox label={"Password"} type={"text"} placeholder={"pass@123"} onChange={e => {
                setPassword(e.target.value);
            }}/>
            <Button onClick = {async ()=>{
                const data = await fetch("http://localhost:3000/api/v1/signup",{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            "firstname":firstname,
                            "username":username,
                            "password":password
                        })
                })
                const response = await data.json();
                localStorage.setItem("token",response.token);
                navigate("/dashboard")
            }} label={"Signup"}/>
            <Warning label={"Already have an account?"} buttontext={"signin"} to={"/signin"}/>
            </div>
        </div>
    )
}