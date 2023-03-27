import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {
  public id: number;
  public produto: Produto = {
    id: null,
    nome: '',
    preco: null,
    descricao: '',
    foto: ''
  };

  constructor(private route: ActivatedRoute,
              private produtosService: ProdutosService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.produtosService.getProdutoId(this.id).subscribe((produto: Produto)=>{
      this.produto = produto;
    });

  }

  ngOnInit(): void {
  }


}
