import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Pipe({
  name: 'exemploProdutoPrecoImpuro',
  pure: false
})
export class ExemploProdutoPrecoImpuroPipe implements PipeTransform {

  transform(produto: Produto[]): Produto[] {

    produto = produto.filter ( (item) => {
      if (item.preco) {
        return item;
      }
    });

    return produto;
  }

  }
