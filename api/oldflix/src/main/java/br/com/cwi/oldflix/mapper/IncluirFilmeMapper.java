package br.com.cwi.oldflix.mapper;

import br.com.cwi.oldflix.controller.request.IncluirFilmeRequest;
import br.com.cwi.oldflix.controller.response.IncluirFilmeResponse;
import br.com.cwi.oldflix.domain.Filme;

public class IncluirFilmeMapper {
    public static Filme toEntity(IncluirFilmeRequest request) {
        Filme entity = new Filme();
        entity.setCategoria(request.getCategoria());
        entity.setDescricao(request.getDescricao());
        entity.setTitulo(request.getTitulo());
        entity.setUrl_poster(request.getUrl_poster());

        return entity;

    }

    public static IncluirFilmeResponse toResponse(Filme entity){
        IncluirFilmeResponse response = new IncluirFilmeResponse();
        response.setCategoria(entity.getCategoria());
        response.setDisponivel(entity.isDisponivel());
        response.setDescricao(entity.getDescricao());
        response.setTitulo(entity.getTitulo());
        response.setUrl_poster(entity.getUrl_poster());


        return response;
    }

}
