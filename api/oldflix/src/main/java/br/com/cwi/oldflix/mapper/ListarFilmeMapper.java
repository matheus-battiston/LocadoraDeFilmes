package br.com.cwi.oldflix.mapper;

import br.com.cwi.oldflix.controller.response.ListarFilmeResponse;
import br.com.cwi.oldflix.domain.Filme;

public class ListarFilmeMapper {
    public static ListarFilmeResponse toResponse(Filme entity) {
        ListarFilmeResponse response = new ListarFilmeResponse();

        response.setCategoria(entity.getCategoria());
        response.setDisponivel(entity.isDisponivel());
        response.setDescricao(entity.getDescricao());
        response.setId(entity.getId());
        response.setTitulo(entity.getTitulo());
        response.setUrl_poster(entity.getUrl_poster());

        return response;
    }
}
