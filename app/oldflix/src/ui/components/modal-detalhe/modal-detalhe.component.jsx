import "./index.css"
import { useEffect} from "react"
import {useDetalharFilme} from '../../../hooks/filmes/use-detalhar-filme'
import botaoFechar from '../../../assets/images/botao-fechar.png'
import {ContainerConteudo, InfosDoFilme, PosterEDetalhes} from '../'
import { useDevolverFilme } from "../../../hooks/filmes/use-devolver-filme"
import { useAlugarFilme } from "../../../hooks/filmes/use-alugar-filme"

export function ModalDetalhe({id, fechar}) {

    const {filme, update, setId} = useDetalharFilme()
    const {setIdFilme, statusDevolucao} = useDevolverFilme()
    const {setAluguel, statusAluguel} = useAlugarFilme()

    useEffect( () => {
        if (!statusDevolucao){
            setTimeout(() => update(), 500)
        }
    }, [statusDevolucao])


    useEffect( () => {
        if (!statusAluguel){
            update()
        }
    }, [statusAluguel])


    useEffect( () => {
        setId(id)
    }, [])

    function renderDetalhes(){
        
        return (
            <>
                <PosterEDetalhes filme={filme} />
                <InfosDoFilme filme={filme} devolver ={setIdFilme} alugar={setAluguel}/>
            </>
        )
    }

    return (
        <div className="bg">
            <ContainerConteudo>
                <label className="label-botao-fechar">
                    <img src={botaoFechar} className="imagem-botao-fechar" />
                    <button className="botao-fechar" onClick={fechar} />
                </label>
                {filme !== null ? renderDetalhes() : null}
            </ContainerConteudo>
            
        </div>
    )
}