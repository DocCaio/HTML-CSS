import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tabela } from 'src/app/models/tabela.model';
import { TabelaService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-tabela-detalhes',
  templateUrl: './tabela-detalhes.component.html',
  styleUrls: ['./tabela-detalhes.component.css']
})
export class TabelaDetalhesComponent implements OnInit {
  public tabela: Tabela = {
    id: null,
    nome: '',
    departamento: '',
    periodos: null
  };

  constructor(private routes: ActivatedRoute, private router: Router, private tabelaService: TabelaService) { }

  ngOnInit(): void {
    this.routes.params.subscribe((data)=>{
      let id: number = Number(data['id']);

      this.tabelaService.getById(id).subscribe((_tabela: Tabela)=>{
        this.tabela = _tabela;
      });

    });
  }

  editar() {
    this.router.navigate(['/tabela/'+this.tabela.id+'/editar']);
  }

}