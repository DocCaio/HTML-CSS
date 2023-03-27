import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor() { }

  canActivate(): Observable<boolean> | boolean {
      return false;
  }
}
