import "./index.css"
import { Botao } from "../botao/botao.component"
import { FormAluguel } from "../form-aluguel/form-aluguel.component"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ALUGAR = "Alugar"
const DEVOLVER = "Devolver"
const EDITAR = "Editar"

export function InfosDoFilme({filme, devolver, alugar}) {


    const [exibirAluguel, setExibirAluguel] = useState(false)
    const navigate = useNavigate()

    function clickDevolverFilme(){
        devolver(filme.id)
    }

    function clickAlugarFilme(){
        setExibirAluguel(true)
    }

    function clickEditar(){
        navigate(`/editar/${filme.id}`)
    }

    function enviarRequestAluguel(id, responsavel){
        alugar({
            id : id,
            responsavel : responsavel
        })
        setExibirAluguel(false)
    }

    function exibirBotoesAcoes() {
        return (
            <div className="botoes-de-acoes">
                <Botao texto={ALUGAR} desabilitado={!filme.disponivel} onClick={clickAlugarFilme}/>
                <Botao texto={DEVOLVER} desabilitado={filme.disponivel} onClick={clickDevolverFilme}/>
                <Botao texto={EDITAR} desabilitado={!filme.disponivel} onClick={clickEditar}/>
            </div>
        )
    }


    return (
        <div className="infos-do-filme">
            <h1 className="titulo-do-filme">{filme.titulo}</h1>
            <p className="sinopse-filme">{filme.descricao}</p>
            {exibirAluguel? <FormAluguel id={filme.id} funcAluguel={enviarRequestAluguel}/> : exibirBotoesAcoes()}
            
    </div>
    )
}