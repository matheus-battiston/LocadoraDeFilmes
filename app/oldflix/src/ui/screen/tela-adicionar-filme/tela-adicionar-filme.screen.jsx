import { useEffect } from "react"
import { Background, FormEditarIncluirFilme, ContainerConteudo, Header } from "../../components"
import { useDadosFilme } from "../../../hooks/form-incluir-filme/use-form-incluir-filme"
import "./index.css"
import {validarFormIncluir} from '../../../validacoes/validarFormIncluir'
import { useToastr } from "../../../hooks/toastr/use-toastr"
import { useIncluirFilme } from "../../../hooks/filmes/use-incluir-filme"
import { useNavigate } from "react-router-dom"

export function TelaAdicionarFilme(){
    const {mudanca, dadosDosInputs} = useDadosFilme()
    const {setInclusao, statusInclusao} = useIncluirFilme()
    const navigate = useNavigate()

    const toastr = useToastr()

    function submitForm(event){
        event.preventDefault()
        if (!validarFormIncluir(dadosDosInputs)){
            toastr({message : "Todos os campos devem ser preenchidos"})
        } else{
            setInclusao(dadosDosInputs)
        }
    }

    useEffect( () => {
        if (statusInclusao){
            setTimeout(() => {
                navigate('/')
            },500)
        }
    }, [statusInclusao])

    return (
        <Background>
            <Header />
            <ContainerConteudo>
                <FormEditarIncluirFilme 
                    tituloPagina="Inclusão de um novo filme" 
                    mudanca={mudanca} 
                    submitForm={submitForm}/>
            </ContainerConteudo>
        </Background>
    )
}