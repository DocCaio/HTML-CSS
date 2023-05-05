import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';


@Component({
  selector: 'app-exemplo-piper-puro',
  templateUrl: './exemplo-piper-puro.component.html',
  styleUrls: ['./exemplo-piper-puro.component.css']
})
export class ExemploPiperPuroComponent implements OnInit {
  public base: number;
  public expoente: number;

  public produto:  Produto[]= [
    {
      id: 1,
      nome: 'bola' ,
      preco: 0,
      descricao: ''
    },
    {
      id: 2,
      nome: 'camisa' ,
      preco: 0,
      descricao: ''
    },
    {
      id: 3,
      nome: 'tenis' ,
      preco: 0,
      descricao: ''
    },
    {
      id: 4,
      nome: 'luva',
      preco: 0,
      descricao: ''
    }
  ];
   
  public nome: string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

adicionarRef(){

  let auxProduto: Produto[] = [];

    this.produto.push({
      id: null,
      nome: this.nome,
      preco: 0,
      descricao: ''
    });

    auxProduto = auxProduto.concat(this.produto);

    this.produto = [];
    this.produto = this.produto.concat(auxProduto);

    console.log('produto', this.produto);
  }


  

}
