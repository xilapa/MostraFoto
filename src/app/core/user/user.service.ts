import { Injectable } from '@angular/core';

import jwt_decode from "jwt-decode";
import { BehaviorSubject, Observable } from 'rxjs';

import { TokenService } from '../token/token.service';
import { IUser } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<IUser>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
   }

  setToken(token: string) : void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() : Observable<IUser>{
    return this.userSubject.asObservable();
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }

  getUserName(): string {
    return this.userName;
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token as string) as IUser;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
