package br.com.cwi.oldflix.service.validatorService;

import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.repository.FilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidatorFilmeEstaAlugado {

    @Autowired
    private FilmesRepository filmesRepository;

    public void validar(Long id){
        Filme filme = filmesRepository.findById(id).get();

        if (filme.isDisponivel()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O filme ja esta disponivel");
        }
    }

}
