package br.com.cwi.oldflix.service.validatorService;

import br.com.cwi.oldflix.repository.FilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidatorFilmeExisteService {

    @Autowired
    private FilmesRepository filmesRepository;

    public void validar(long Id){
        if (!filmesRepository.existsById(Id)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O filme nao existe");
        }
    }
}
