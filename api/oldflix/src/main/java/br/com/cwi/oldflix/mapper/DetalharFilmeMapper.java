package br.com.cwi.oldflix.mapper;

import br.com.cwi.oldflix.domain.StatusDoFilme;
import br.com.cwi.oldflix.controller.response.DetalharFilmeResponse;
import br.com.cwi.oldflix.domain.Filme;

import java.time.LocalDate;

public class DetalharFilmeMapper {


    public static DetalharFilmeResponse toResponse(Filme entity, LocalDate dataDeEntrega, StatusDoFilme situacao){
        DetalharFilmeResponse response = new DetalharFilmeResponse();
        response.setId(entity.getId());
        response.setCategoria(entity.getCategoria());
        response.setDisponivel(entity.isDisponivel());
        response.setDescricao(entity.getDescricao());
        response.setTitulo(entity.getTitulo());
        response.setUrl_poster(entity.getUrl_poster());
        response.setData_de_entrega(dataDeEntrega);
        response.setSituacao(situacao);
        response.setResponsavel(entity.getResponsavel());


        return response;
    }
}
