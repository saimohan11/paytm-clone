import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios  from "axios";

export function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,sendAmount] = useState(0)
    return (
        <div className="w-full h-screen flex justify-center items-center bg-slate-400">
            <div className="w-96 h-80 bg-white">
                <div className="font-bold text-3xl text-center py-4">
                Send Money
                </div>
                <div className="flex py-4 px-4">
                    <div className="w-12 h-12 bg-red-500 font-medium text-2xl flex items-center justify-center rounded-full mr-3">{name[0].toUpperCase()}</div>
                    <div className="flex items-center justify-center font-bold text-2xl">{name}</div>
                </div>
                <div className="px-3 font-medium">
                    {"Amount (in Rs)"}
                    <div className="pt-2.5">
                    <InputBox onChange={(e)=>{
                        sendAmount(e.target.value)
                    }} type={"number"} placeholder={"Enter Amount"}/>
                    </div>
                </div>
                <div className="pt-2">
                <Button label={"send Money"} onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/transfer",{
                        to: id,
                        amount
                        },{
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                        console.log(response.data)
                }}/>
                </div>
            </div>
        </div>
    )
}