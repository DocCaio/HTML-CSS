import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { Produto } from 'src/app/models/produto.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  private atual = null;
  private URL = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {

  }

  cadastrar(produto:Produto): Observable<any> {
    const codigo = Number(this.gerarCodigo());
    produto.id = Number(codigo);
    produto.foto = '../../../assets/img/produtos/produtos-01.jpg';

    const produtoPost = JSON.stringify(produto);

    return this.http.post(this.URL+'/', produtoPost, httpOptions);
  }

  editar(produto: Produto): Observable<any> {
    const produtoPut = JSON.stringify(produto);
    return this.http.put(this.URL+'/'+produto.id, produtoPut, httpOptions);
  }

  getProdutoId(id: number):Observable<Produto> {
    return this.http.get<Produto>(this.URL+'/'+id);
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  deletar(id: number):Observable<any> {
   return this.http.delete(this.URL+'/'+id);
  }


  getByNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL+'?nome_like='+nome);
  }


  paginar(indicePagina: number, quantItens: number) {
    return this.http.get(this.URL+'?_page='+indicePagina+'&_limit='+quantItens, {observe : 'response'});
  }

  gerarCodigo() {
    let codigo = new Date().getTime();

    if(codigo === this.atual) {
      codigo++;
    }
    this.atual = codigo;
    return codigo;
  }
}