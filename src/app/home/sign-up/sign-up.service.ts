import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewUser } from './INewUser';

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUp(newUser: INewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
