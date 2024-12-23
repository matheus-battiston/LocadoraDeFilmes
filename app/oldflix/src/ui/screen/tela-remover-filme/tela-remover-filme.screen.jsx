import { useEffect, useState } from "react"
import { useDeletarFilme } from "../../../hooks/filmes/use-deletar-filme"
import { Background, Conteudo, Header } from "../../components"
import { useGetTodosOsFilmes } from "../../../hooks/filmes/use-get-todos-filmes"

import "./index.css"

export function TelaRemoverFilme(){
    const {filmes, update} = useGetTodosOsFilmes()
    const {setIdFilme, statusRemocao} = useDeletarFilme()
    

    function clickRemoveMovie(event){
        const {value} = event.target
        setIdFilme(value)
    }

    useEffect( () => {
        if (statusRemocao){
            update()
        }
    }, [statusRemocao])


    return (
        <Background>
            <Header />
            <Conteudo filmes={filmes} remove={"label-wrap"} onClick={clickRemoveMovie}/>
        </Background>
    )
}