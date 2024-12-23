import './index.css'
import { useGetTodosOsFilmes } from '../../../hooks/filmes/use-get-todos-filmes'
import {useState } from 'react'
import { Background, Conteudo, Header, ModalDetalhe } from '../../components'

export function TelaPrincipal(){


    const {filmes} = useGetTodosOsFilmes()
    const [detalheFilme, setDetalheFilme] = useState()
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    function lidarComClick(event){
        const {value} = event.target

        setDetalheFilme(value)
        setMostrarDetalhes(true)

    }

    function fecharModal(){
        setMostrarDetalhes(false)
        setDetalheFilme(null)

    }
    
    return (
        <Background>
            <Header />
            <Conteudo filmes={filmes} onClick={lidarComClick}/>
            {mostrarDetalhes ? <ModalDetalhe id={detalheFilme} fechar={fecharModal}/> : null}
            
        </Background>
    )
}