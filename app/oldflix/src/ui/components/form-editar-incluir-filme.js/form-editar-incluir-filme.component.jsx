import "./index.css"
import { Botao } from "../botao/botao.component"
const VALOR_OURO = "OURO"
const VALOR_PRATA = "PRATA"
const VALOR_BRONZE = "BRONZE"


export function FormEditarIncluirFilme({tituloPagina, mudanca, submitForm}){
    return (
        <section className="form-adicionar-filme">
        <h1 className="title">{tituloPagina}</h1>
        <form className="estilo-do-form" onSubmit={submitForm}>
            <label className="label-form">Nome do filme</label>
            <input className="estilo-input" type="text" name="titulo" onChange={mudanca}/>
            
            <label className="label-form">URL do poster</label>
            <input className="estilo-input" type="text" name="url_poster" onChange={mudanca}/>

            <label className="label-form">Descrição</label>
            <textarea className="estilo-input descricao" type="text" name="descricao" onChange={mudanca}/>

            <select className="espaco-select" onChange={mudanca} name="categoria" defaultValue="">
                <option value="" disabled >Selecione a categoria</option>
                <option value={VALOR_OURO}>Ouro</option>
                <option value={VALOR_PRATA}>Prata</option>
                <option value={VALOR_BRONZE}>Bronze</option>
            </select>
            <Botao texto="Confirmar" />
        </form>
    </section>
    )
}