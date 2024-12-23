import "./index.css"

export function Botao ({texto, onClick, desabilitado}){
    return (
        <button className="estilo-botao" onClick={onClick} disabled={desabilitado}>{texto}</button>
    )
}