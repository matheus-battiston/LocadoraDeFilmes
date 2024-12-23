package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.controller.request.AlugarFilmeRequest;
import br.com.cwi.oldflix.domain.Filme;
import br.com.cwi.oldflix.repository.FilmesRepository;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeDisponivelService;
import br.com.cwi.oldflix.service.validatorService.ValidatorFilmeExisteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AlugarFilmeService {
    @Autowired
    private FilmesRepository filmesRepository;

    @Autowired
    private ValidatorFilmeExisteService validatorFilmeExisteService;

    @Autowired
    private ValidatorFilmeDisponivelService validatorFilmeDisponivelService;

    public void alugar(Long id, AlugarFilmeRequest request){

        validatorFilmeExisteService.validar(id);
        validatorFilmeDisponivelService.validar(id);

        Filme filmeASerAlugado = filmesRepository.findById(id).get();

        filmeASerAlugado.setDisponivel(false);
        filmeASerAlugado.setResponsavel(request.getResponsavel());
        filmeASerAlugado.setData_de_retirada(LocalDate.now());

        filmesRepository.save(filmeASerAlugado);

    }
}
