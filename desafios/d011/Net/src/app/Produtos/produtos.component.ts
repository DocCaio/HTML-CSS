  
import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './../service/produtos.service';

import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  public produtos:  Produto[] = [];
  public indice: number = 1;
  public quantItens: number = 5;

  public paginas: any[] = [];
  public maxPaginas:number = null;
  public totalProdutos:number = null;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {

    this.produtosService.paginar(this.indice, this.quantItens).subscribe((resposta)=>{
      console.log('resposta', resposta);
      console.log('headers', resposta.headers);
      console.log('Count', resposta.headers.get('X-Total-Count'));

      this.totalProdutos = Number(resposta.headers.get('X-Total-Count'));
      this.maxPaginas = Math.ceil(this.totalProdutos/ this.quantItens);

      console.log(resposta.body);

      let aux = JSON.stringify(resposta.body);
      let auxArray: any[] = JSON.parse(aux);

      this.produtos = auxArray;

      console.log('produtos', this.produtos);


      // this.produtos = produtos;

      this.gerarIndices();
    });


  }


  gerarIndices() {
    let ativa: boolean = false;
    this.paginas = [];

    for (let i = 1; i<=this.maxPaginas; i++) {
      if (this.indice === i) {
        ativa = true;
      } else {
        ativa = false;
      }

      this.paginas.push({
        indice: i,
        ativa: ativa
      });

    }


  }

  mudarPagina(indice: number) {
    this.indice = indice;
    
    this.produtosService.paginar(this.indice, this.quantItens).subscribe((resposta)=>{
      this.totalProdutos = Number(resposta.headers.get('X-Total-Count'));
      this.maxPaginas = Math.ceil(this.totalProdutos/ this.quantItens);


      let aux = JSON.stringify(resposta.body);
      let auxArray: any[] = JSON.parse(aux);

      this.produtos = auxArray;

      this.gerarIndices();
    });
  }

}