package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeEstaAlugado;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeExisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DevolverFilmeService {
    @Autowired
    private FilmesRepository filmesRepository;
    @Autowired
    private ValidatorFilmeExisteService filmeExisteService;
    @Autowired
    private ValidatorFilmeEstaAlugado filmeEstaAlugado;

    public void devolver(Long id){
        filmeExisteService.validar(id);
        filmeEstaAlugado.validar(id);

        Filme filme = filmesRepository.findById(id).get();

        filme.setDisponivel(true);
        filme.setResponsavel(null);
        filme.setData_de_retirada(null);

        filmesRepository.save(filme);

    }
}
