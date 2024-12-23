import { useEffect } from "react"
import useGlobalToastr from "../../../context/toastr/toastr.context"
import "./index.css"
const TOASTR_DELAY = 10000

export function Toastr(){
    const [toastrMessage, setToastrMessage] = useGlobalToastr()

    useEffect(() => {
        if (toastrMessage){
            setTimeout(() => {
                setToastrMessage(null)
            }, TOASTR_DELAY)
        }
    }, [toastrMessage, setToastrMessage])

    if (!toastrMessage) return

    return(
        <div className={`toastr-style ${toastrMessage.color}`}>
            <p>{toastrMessage.message}</p>
        </div>
    )
}