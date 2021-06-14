import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';

@Component({
  selector: 'mf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<IUser>;
  user: IUser;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    
  }

}
