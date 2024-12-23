import { useNavigate, useParams } from "react-router-dom"
import { useEditarFilme } from "../../../hooks/filmes/use-editar-filme"
import { useFormEditarFilme } from "../../../hooks/form-editar-filme/use-form-editar-filme"
import { Background, Header, ContainerConteudo, FormEditarIncluirFilme } from "../../components"
import { validarFormEditar } from "../../../validacoes/validarFormEditar"
import "./index.css"
import { useToastr } from "../../../hooks/toastr/use-toastr"
import { useEffect } from "react"

export function TelaEditarFilme(){
    const {id} = useParams()
    const {setCamposEdicao, statusEdicao} = useEditarFilme()
    const {mudanca, dadosDosInputs} = useFormEditarFilme()
    const navigate = useNavigate()
    const toastr = useToastr()

    function submitForm(event){
        event.preventDefault()
        if (!validarFormEditar(dadosDosInputs)){
            toastr({message : "Algum campo deve ser preenchido"})
        } else{
            setCamposEdicao({id: id, campos: dadosDosInputs})
        }
    }

    useEffect( () => {
        if (statusEdicao){
            setTimeout(() => {
                navigate('/')
            },500)
        }
    }, [statusEdicao])

    return (
        <Background>
            <Header />
            <ContainerConteudo>
                <FormEditarIncluirFilme 
                    tituloPagina="Editar o filme" 
                    mudanca={mudanca} 
                    submitForm={submitForm}/>
            </ContainerConteudo>
        </Background>
    )
}