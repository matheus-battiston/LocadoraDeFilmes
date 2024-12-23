package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.controller.request.IncluirFilmeRequest;
import br.com.cwi.oldflix.controller.response.IncluirFilmeResponse;
import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.mapper.IncluirFilmeMapper;
import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorTituloUnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncluirFilmeService {
    @Autowired
    private FilmesRepository filmesRepository;
    @Autowired
    private ValidatorTituloUnicoService validatorTituloUnicoService;
    public IncluirFilmeResponse incluir(IncluirFilmeRequest request) {

        validatorTituloUnicoService.validar(request.getTitulo());

        Filme filme = IncluirFilmeMapper.toEntity(request);
        filme.setResponsavel(null);
        filme.setDisponivel(true);
        filme.setData_de_retirada(null);

        filmesRepository.save(filme);

        return IncluirFilmeMapper.toResponse(filme);

    }
}
