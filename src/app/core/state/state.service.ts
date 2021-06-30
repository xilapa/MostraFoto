import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public state: State = {};

}
export interface State {
  [key: string]: any;
}

