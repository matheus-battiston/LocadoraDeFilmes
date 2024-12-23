package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.domain.Categoria;
import br.com.cwi.oldflix.domain.StatusDoFilme;
import br.com.cwi.oldflix.controller.response.DetalharFilmeResponse;
import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeExisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static br.com.cwi.oldflix.domain.StatusDoFilme.EM_ATRASO;
import static br.com.cwi.oldflix.domain.StatusDoFilme.EM_DIA;
import static br.com.cwi.oldflix.mapper.DetalharFilmeMapper.toResponse;
import static java.time.LocalDate.*;

@Service
public class DetalharFilmeService {
    private final static int PRAZO_ENTREGA_BRONZE = 5;
    private final static int PRAZO_ENTREGA_PRATA = 3;
    private final static int PRAZO_ENTREGA_OURO = 2;
    @Autowired
    private FilmesRepository filmesRepository;
    @Autowired
    private ValidatorFilmeExisteService filmeExisteService;


    public DetalharFilmeResponse detalhar(Long id){

        filmeExisteService.validar(id);

        Filme filme = filmesRepository.findById(id).get();
        LocalDate dataDeEntrega = calculoDataEntrega(filme.getData_de_retirada(), filme.getCategoria());
        StatusDoFilme situacao = calculoStatusDoFilme(dataDeEntrega);

        return toResponse(filme, dataDeEntrega, situacao);

    }
    private LocalDate calculoDataEntrega(LocalDate dataRetirada, Categoria categoriaDoFilme){

        if (dataRetirada == null) {
            return null;
        }

        switch (categoriaDoFilme){
            case BRONZE:
                return dataRetirada.plusDays(PRAZO_ENTREGA_BRONZE);
            case PRATA:
                return dataRetirada.plusDays(PRAZO_ENTREGA_PRATA);
            case OURO:
                return dataRetirada.plusDays(PRAZO_ENTREGA_OURO);
            default:
                return null;
        }
    }

    private StatusDoFilme calculoStatusDoFilme(LocalDate dataDeEntrega){

        if (dataDeEntrega == null){
            return null;
        }

        if (dataDeEntrega.isBefore(now())){
            return EM_ATRASO;
        }

        return EM_DIA;
    }
}
