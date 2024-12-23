import "./index.css"

export function Conteudo({onClick, remove, filmes}){
    function renderFilmes() {
        return (
            <div className="filmes">   
                {
                    filmes.map(filme => {
                        return (
                            <label className={remove} key={filme.id}>
                                <img src={filme.url_poster} className="estilo-poster" alt={`Imagem de ${filme.titulo}`}/>
                                <button className="button" value={filme.id} onClick={onClick}></button>
                            </label>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <section className="container-conteudo">
            {filmes ? renderFilmes() : null}
        </section>
    )
}