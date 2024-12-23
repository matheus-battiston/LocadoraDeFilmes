package br.com.cwi.oldflix.controller.request;

import br.com.cwi.oldflix.domain.Categoria;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EditarFilmeRequest {
    private String titulo;
    private String descricao;
    private Categoria categoria;
    private String url_poster;
}
