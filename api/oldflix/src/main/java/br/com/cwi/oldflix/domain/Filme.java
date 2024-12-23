package br.com.cwi.oldflix.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.EnumType.*;
import static javax.persistence.GenerationType.*;

@Getter
@Setter
@Entity
public class Filme {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long Id;
    private String titulo;
    private String url_poster;
    private String descricao;
    private LocalDate data_de_retirada;
    @Enumerated(STRING)
    private Categoria categoria;
    private String responsavel;
    private boolean disponivel;
}
