import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPotencia'
})
export class CalcPotenciaPipe implements PipeTransform {

  transform(base: number, expoente: number): number{
    if (base && expoente) {
      return Math.pow(base, expoente);
    }
    return 0;
  }

}
