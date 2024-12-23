package br.com.cwi.oldflix.controller;

import br.com.cwi.oldflix.controller.request.AlugarFilmeRequest;
import br.com.cwi.oldflix.controller.request.EditarFilmeRequest;
import br.com.cwi.oldflix.controller.request.IncluirFilmeRequest;
import br.com.cwi.oldflix.controller.response.DetalharFilmeResponse;
import br.com.cwi.oldflix.controller.response.IncluirFilmeResponse;
import br.com.cwi.oldflix.controller.response.ListarFilmeResponse;
import br.com.cwi.oldflix.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/filmes")
public class OldflixController {

    @Autowired
    ListarFilmeService listarFilmeService;
    @Autowired
    IncluirFilmeService incluirFilmeService;
    @Autowired
    AlugarFilmeService alugarFilmeService;

    @Autowired
    RemoverFilmeService removerFilmeService;

    @Autowired
    DevolverFilmeService devolverFilmeService;

    @Autowired
    DetalharFilmeService detalharFilmeService;

    @Autowired
    EditarFilmeService editarFilmeService;

    @GetMapping
    public List<ListarFilmeResponse> listar(){
        return listarFilmeService.listar();
    }

    @PostMapping
    public IncluirFilmeResponse incluir(@Valid @RequestBody IncluirFilmeRequest request){
        return incluirFilmeService.incluir(request);
    }

    @PutMapping("/{id}/alugar")
    public void alugar(@Valid @RequestBody AlugarFilmeRequest request, @PathVariable Long id){
        alugarFilmeService.alugar(id, request);
    }

    @DeleteMapping("/{id}")
    public void remover( @PathVariable Long id){
        removerFilmeService.remover(id);
    }

    @PutMapping("/{id}/devolver")
    public void devolver (@PathVariable Long id) {devolverFilmeService.devolver(id);}

    @GetMapping("/{id}")
    public DetalharFilmeResponse detalhar(@PathVariable Long id) {return detalharFilmeService.detalhar(id);}

    @PutMapping("/{id}")
    public void editar(@RequestBody EditarFilmeRequest request,  @PathVariable Long id) {
        editarFilmeService.editar(id, request);}

}
