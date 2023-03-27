import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';


@Pipe({
  name: 'exemploProdutoPreco'
})
export class ExemploProdutoPrecoPipe implements PipeTransform {

  transform(produto: Produto[]): Produto[] {
   let auxProduto: Produto[] = [];

   for (const obj of produto){
     if(obj.preco){
       auxProduto.push(obj);
     }

   }
   

   produto = produto.filter((item)=>{
     if (item.preco) {
       return item;
     }
    });
    
    return produto;
  }

}
