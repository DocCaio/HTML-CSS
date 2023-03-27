import { Injectable } from '@angular/core';

import { CanActivate, CanLoad, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from './login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, private autenticacaoService: AuthenticationService) { }

  canActivate(): Observable<boolean> | boolean {

    console.log('canActivate!');

    //Comentei aqui porque o método isUsuarioAutenticado() não foi implementado
    // if (this.autenticacaoService.isUsuarioAutenticado() ) {
      return true;
    //}

    // this.router.navigate(['/login']);
    // return false;
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('CanLoad!');

    //Comentei aqui porque o método isUsuarioAutenticado() não foi implementado
    // if (this.autenticacaoService.isUsuarioAutenticado()) {
      return true;
    // }

    // this.router.navigate(['/login']);
    // return false;
  }

}