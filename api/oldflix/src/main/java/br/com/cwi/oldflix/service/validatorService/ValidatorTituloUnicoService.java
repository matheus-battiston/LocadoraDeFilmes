package br.com.cwi.oldflix.service.validatorService;

import br.com.cwi.oldflix.repository.FilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidatorTituloUnicoService {

    @Autowired
    FilmesRepository filmesRepository;

    public void validar(String titulo){
        if (filmesRepository.existsByTitulo(titulo)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Ja existe um filme com este titulo");
        }
    }

}
