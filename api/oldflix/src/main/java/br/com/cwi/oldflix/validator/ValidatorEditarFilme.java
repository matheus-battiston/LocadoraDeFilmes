package br.com.cwi.oldflix.validator;

import br.com.cwi.oldflix.controller.request.EditarFilmeRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class ValidatorEditarFilme {

    public void validar(EditarFilmeRequest request){
        if (isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "A requisiçao nao pode ser nulo");
        }

        if (isNull(request.getTitulo()) &&
                isNull(request.getDescricao()) &&
                isNull(request.getCategoria()) &&
                isNull(request.getUrl_poster())){
            throw new ResponseStatusException(BAD_REQUEST, "Algum campo deve ser preenchido");
        }
    }
}
