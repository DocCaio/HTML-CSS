import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tabela} from 'src/app/models/tabela.model';
import { CursosService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-tabela-editar',
  templateUrl: './tabela-editar.component.html',
  styleUrls: ['./tabela-editar.component.css']
})
export class TabelaEditarComponent implements OnInit {
  public tabela: Tabela = {
    id: null,
    nome: '',
    departamento: '',
    fabricante: null
  };
  
  constructor(private routes: ActivatedRoute, private router: Router, private tabelaService: CursosService) { }

  ngOnInit(): void {
    this.routes.params.subscribe((data)=>{
      let id: number = Number(data['id']);

      this.tabelaService.getById(id).subscribe((_tabela: Tabela)=>{
        this.tabela = _tabela;
      });

    });
  }


  editar() {
    this.tabelaService.update(this.tabela).subscribe(()=>{
      this.router.navigate(['/tabela']);
    });
  }
}