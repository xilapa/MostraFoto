import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

}
