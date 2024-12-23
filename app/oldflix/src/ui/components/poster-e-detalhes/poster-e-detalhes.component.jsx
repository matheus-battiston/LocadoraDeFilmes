import "./index.css"

import seloOuro from '../../../assets/images/selo-ouro.png'
import seloBronze from '../../../assets/images/selo-bronze.png'
import seloPrata from '../../../assets/images/selo-prata.png'

const INDISPONIVEL = "Indisponivel"
const DISPONIVEL = "Disponivel"
const DATA_DE_ENTREGA = "Data de entrega :"
const RESPONSAVEL = "Responsavel: "

const situacao = {
    "EM_DIA" : "EM DIA",
    "EM_ATRASO": "EM ATRASO"
}


function defineSelo(filme){
    switch(filme.categoria){
        case 'BRONZE':
            return seloBronze
        case 'PRATA':
            return seloPrata
        case 'OURO':
            return seloOuro
        default:
            return null
    }
}

function disponivel(filme){
    if (filme.disponivel){
        return (
            <p className="disponivel">{DISPONIVEL}</p>
        )
    } else{
        return (
            <>
                <p className="indisponivel">{INDISPONIVEL}</p>
                <p className="nome-do-responsavel">{RESPONSAVEL} {filme.responsavel}</p>
                <p className="status-da-entrega">{DATA_DE_ENTREGA} {filme.data_de_entrega}</p>
                <p className={`situacao ${filme.situacao}`}>{situacao[filme.situacao]}</p>
            </>
        )
    }
}

export function PosterEDetalhes({filme}){

    const selo = defineSelo(filme)

    return (
        <>
            <div className="poster-e-status">
                <div className="container-poster">
                    <img src={filme.url_poster} className="img-modal"/>
                    <img src={selo} className="selo"/>
                </div>
                {disponivel(filme)}

            </div>
        </>
    )
}