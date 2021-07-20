import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';

@Component({
  selector: 'mf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  user$: Observable<IUser>;
  keyDownSubs: Subscription;

  @ViewChild('menu') menuComponent: MenuComponent;


  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.keyDownSubs = fromEvent(window, 'keydown')
      .pipe(tap(e => {
        if ((e as KeyboardEvent).key != "Enter") e.preventDefault()
      }))
      .pipe(filter(e => (e as KeyboardEvent).key == "Enter" && !(e.target as HTMLElement).classList.contains('rounded')))
      .subscribe(() =>
        this.menuComponent.toggle());

  }

  logout(): void {
    this.userService.logout();
    this.router.navigate([''])
  }


}
