import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /*
  Comentei porque isso o que você fez, não tem sentido
  constructor(private prudutosService: ProdutosService)  {

    this.produtosService.getTodos().subscribe( function((data: Produtos[])-> {
      this.produtos = data;
    });

  }
  */

  constructor() {
    
  }

  ngOnInit() {
    
  }

}
