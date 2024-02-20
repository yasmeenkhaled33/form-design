import { useContext } from "react"
import { inputscontext } from "./contexts/inputcontext"
export default function Mycom() {
    const inputcontext=useContext(inputscontext)
    return (
        <>
            <label>{inputcontext.name}</label>
            <input className="maininput" value={inputcontext.value} onChange={(event)=>{inputcontext.change(event.target.value)}}/>
        </>
    )
}