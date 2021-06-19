import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

const API_URL = "http://localhost:3000";

@Injectable()
export class UserNameTakenValidatorService {

  constructor(private http: HttpClient) { }
  
  Validator() {
    const checkUserNameTaken = (userName: string) : Observable<any> => 
       this.http.get(API_URL + '/user/exists/' + userName)
    
    return (control: AbstractControl)=>{
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(input => checkUserNameTaken(input)))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first())
    }
  }
}
