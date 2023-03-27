import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Produto } from 'src/app/models/produto.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class ProdutoService {
  private url: string = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Produto>(this.url+'/'+id);
  }

  update(curso: Produto) {
    const cursoPut = JSON.stringify(curso);
    return this.http.put<Produto>(this.url+'/'+curso.id, cursoPut, httpOptions);
  }

  /*
  paginar(indicePagina: number, quantItens: number):Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url+'?_page='+indicePagina+'&_limit='+quantItens);
  }
  */


  paginar(indicePagina: number, quantItens: number) {
    return this.http.get(this.url+'?_page='+indicePagina+'&_limit='+quantItens, {observe : 'response'});
  }
}