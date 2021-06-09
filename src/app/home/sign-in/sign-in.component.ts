import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public authenticateSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.authenticateSubscription.unsubscribe();
  }

  public login() {
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authenticateSubscription = this.authService.authenticate(userName, password).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.router.navigate(['user', userName])
        },
        error: (err) => {
          console.log(err);
          this.loginForm.reset();
        }
      })
  }

}
