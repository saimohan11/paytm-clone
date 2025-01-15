export function InputBox({label,placeholder}) {
    return (
        <div className="flex flex-col px-2">
            {label}
            <input className="py-1.5 px-2  border-2 border-gray-700" type="text" placeholder={placeholder} required/>
        </div>
    )
}