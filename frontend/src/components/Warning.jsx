import { Link } from "react-router-dom";

export function Warning({label,buttontext,to}) {
    return (
        <div className="flex justify-center">
            <div className="">
            {label}
            </div>
            <Link className="underline pl-1" to={to}>

            {buttontext}
            </Link>
        </div>

    )
}