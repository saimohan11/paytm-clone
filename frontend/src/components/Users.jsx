import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useNavigate } from "react-router-dom";


export function Users({balance}) {
    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/bulk?filter="+filter)
        .then(response=>{
            setUsers(response.data)
            console.log(response.data)
        }) 
    },[filter])

    return (
        <>
        <div className="w-full h-full">
            <div className="font-medium text-lg m-8">
                Your Balance {balance}
            </div>
            <div className="font-bold text-2xl m-8">
                users
            </div>
            <div className="m-8">
                <InputBox placeholder={"search"} type={"text"} onChange={(e)=>{
                    setFilter(e.target.value)
                }}/>
            </div>
            <div className="m-8">
                {users.map(user => <User key={user._id} _id={user._id} firstname={user.firstname}/>)}
            </div>
        </div>
        </>
    )
}

export function User({firstname,_id}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
                <div className="flex flex-col justify-center h-full text-xl">
                    {firstname}
                </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} onClick={()=>{
                navigate("/send?id="+_id + "&name="+firstname)
            }}/>
        </div>
    </div>
}