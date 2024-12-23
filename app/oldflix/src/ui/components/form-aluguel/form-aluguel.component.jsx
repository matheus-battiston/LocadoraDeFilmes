import "./index.css"
import { useState } from "react"
import { Botao } from "../botao/botao.component"

export function FormAluguel({id, funcAluguel}){
    const [inputTextNome, setInputTextNome] = useState("")

    function mudancaInputNome(event){
        const {value} = event.target
        setInputTextNome(value)
    }

    function alugar(event){
        event.preventDefault()
        funcAluguel(id, inputTextNome)

    }

    return (
        <form className="estilo-form" onSubmit={alugar}>
            <label className="label-input">Nome do responsavel</label>
            <input type="text" className="input-form" onChange={mudancaInputNome}/>
            <Botao texto="Confirmar" />
        </form>
    )
}