package br.com.cwi.oldflix.controller.response;

import br.com.cwi.oldflix.domain.Categoria;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ListarFilmeResponse {

    private Long Id;
    private String titulo;
    private String url_poster;
    private String descricao;
    private Categoria categoria;
    private boolean disponivel;
}
