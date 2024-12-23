package br.com.cwi.oldflix.controller.request;

import br.com.cwi.oldflix.domain.Categoria;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class IncluirFilmeRequest {

    @NotBlank
    private String titulo;
    @NotBlank
    private String url_poster;
    @NotBlank
    private String descricao;
    @NotNull
    private Categoria categoria;

}
