import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';


import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/models/produto.model';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';




@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public produtos: Array<Produto> = [ ];

  public nomeQuery = new FormControl();
  public total: number = 0;

  public resultados: Observable<any>;


  constructor(private produtosService: ProdutosService) {
    
  }

  ngOnInit(): void {
    this.resultados = this.nomeQuery.valueChanges.pipe(
        filter( value => value.length > 2),
        map( value => value.trim() ),
        debounceTime(300),
        distinctUntilChanged(),
        // tap(value=> console.log(value)),
        switchMap( (value) => {
          return this.produtosService.getByNome(value);
        }),
        map( (resposta: Produto[])=> resposta ),
        tap( (resposta: Produto[])=> this.total = resposta.length)

    );

  }

  ngOnDestroy() {
    
  }



  deletar(id: number) {
    this.produtosService.deletar(id).subscribe((reposta: any)=>{


      this.produtosService.getAll().subscribe((produtos:Produtos[])=>{
        this.produtos = produtos;
      });
      

    });
   
  }


  buscar() {
    this.resultados = this.produtosService.getByNome(this.nomeQuery.value).pipe(
      tap((resposta: Produto[])=> this.total = resposta.length),
      map((resposta: Produto[])=> this.produtos = resposta)
    )
  }
}