import { NavLink } from "react-router-dom"
import logoNetflix from "../../../assets/images/logo-netflix.svg"
import "./index.css"

export function Header() {

    const classeAtiva = "ativa"
    const classeNaoAtiva = "nao-ativa"
    
    return (
        <header className="estilo-header">
            <div className="container-header">
                <img className="logo" src={logoNetflix} alt="Logo da NETFLIX. Escrito netflix em letras vermelhas"/>

                <div className="espaco-botoes">
                    <NavLink to={"/"}
                            className={({ isActive }) =>
                            isActive ? classeAtiva : classeNaoAtiva }>
                        Inicio
                    </NavLink>

                    <NavLink to={"/adicionar"} 
                            className={({ isActive }) =>
                                isActive ? classeAtiva : classeNaoAtiva }>
                        Incluir
                    </NavLink>

                    <NavLink to={"/remover"}
                            className={({ isActive }) =>
                            isActive ? classeAtiva : classeNaoAtiva }>
                        Remover
                    </NavLink>
                </div>

            </div>

            
        </header>
    )
}