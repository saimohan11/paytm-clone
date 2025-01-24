export function InputBox({label,placeholder,onChange,type}) {
    return (
        <div className="flex flex-col font-medium">
            {label}
            <input onChange={onChange} className="py-1.5 rounded-md px-2 border-2 border-gray-700" type={type} placeholder={placeholder} required/>
        </div>
    )
}