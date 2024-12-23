package br.com.cwi.oldflix.service;

import br.com.cwi.oldflix.controller.response.ListarFilmeResponse;
import br.com.cwi.oldflix.mapper.ListarFilmeMapper;
import br.com.cwi.oldflix.repository.FilmesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarFilmeService {
    @Autowired
    FilmesRepository filmesRepository;

    public List<ListarFilmeResponse> listar(){

        return filmesRepository.findAll()
                .stream()
                .map(ListarFilmeMapper::toResponse)
                .collect(toList());

    }
}