import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  public produto: Produto = {
    id: null,
    nome: '',
    preco: null,
    descricao: '',
    foto: ''
  };

  constructor(private produtosService: ProdutosService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvar() {
    this.produtosService.cadastrar(this.produto).subscribe(()=>{
      this.router.navigateByUrl('/produtos');
    });
    
  }
}
