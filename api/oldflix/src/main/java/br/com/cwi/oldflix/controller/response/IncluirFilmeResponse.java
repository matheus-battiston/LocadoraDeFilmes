package br.com.cwi.oldflix.controller.response;

import br.com.cwi.oldflix.domain.Categoria;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class IncluirFilmeResponse {

    private String titulo;
    private String url_poster;
    private String descricao;
    private LocalDate data_de_retirada;
    private Categoria categoria;
    private boolean disponivel;
}
