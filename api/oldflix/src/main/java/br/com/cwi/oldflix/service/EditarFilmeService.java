package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.controller.request.EditarFilmeRequest;
import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeDisponivelService;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeExisteService;
import br.com.cwi.oldflix.service.validatorService.ValidatorTituloUnicoService;
import br.com.cwi.oldflix.validator.ValidatorEditarFilme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static java.util.Objects.nonNull;

@Service
public class EditarFilmeService {
    @Autowired
    private FilmesRepository filmesRepository;
    @Autowired
    private ValidatorFilmeExisteService filmeExisteService;
    @Autowired
    private ValidatorFilmeDisponivelService filmeDisponivelService;
    @Autowired
    private ValidatorTituloUnicoService validatorTituloUnicoService;

    @Autowired
    private ValidatorEditarFilme validatorEditarFilme;

    public void editar(Long id, EditarFilmeRequest request){

        validatorEditarFilme.validar(request);


        filmeExisteService.validar(id);
        filmeDisponivelService.validar(id);

        if (Objects.nonNull(request.getTitulo())){
            validatorTituloUnicoService.validar(request.getTitulo());
        }

        Filme filme = filmesRepository.findById(id).get();

        if (nonNull(request.getTitulo())){
            filme.setTitulo(request.getTitulo());
        }

        if (nonNull(request.getDescricao())){
            filme.setDescricao(request.getDescricao());
        }

        if (nonNull(request.getCategoria())){
            filme.setDescricao(request.getDescricao());
        }

        if (nonNull(request.getUrl_poster())){
            filme.setUrl_poster(request.getUrl_poster());
        }

        filmesRepository.save(filme);
    }
}
