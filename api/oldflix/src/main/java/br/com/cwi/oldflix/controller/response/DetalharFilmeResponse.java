package br.com.cwi.oldflix.controller.response;

import br.com.cwi.oldflix.domain.Categoria;
import br.com.cwi.oldflix.domain.StatusDoFilme;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
public class DetalharFilmeResponse {
    private Long Id;
    private String titulo;
    private String url_poster;
    private String descricao;
    private Categoria categoria;
    private boolean disponivel;
    private LocalDate data_de_entrega;
    private StatusDoFilme situacao;
    private String responsavel;




}
