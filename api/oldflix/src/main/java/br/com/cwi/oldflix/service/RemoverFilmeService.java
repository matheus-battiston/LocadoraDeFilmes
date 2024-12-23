package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeDisponivelService;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeExisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RemoverFilmeService {

    @Autowired
    private FilmesRepository filmesRepository;

    @Autowired
    private ValidatorFilmeExisteService validatorFilmeExisteService;

    @Autowired
    private ValidatorFilmeDisponivelService validatorFilmeDisponivelService;

    public void remover(Long id){
        validatorFilmeExisteService.validar(id);
        validatorFilmeDisponivelService.validar(id);

        filmesRepository.deleteById(id);
    }
}
