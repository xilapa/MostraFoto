import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy, AfterViewInit {

  public loginForm: FormGroup;
  public authenticateSubscription: Subscription;
  @ViewChild('userNameInput') userNameInputElement: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngAfterViewInit(): void {
    if (this.platformDetector.isBrowser())
      this.userNameInputElement.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.authenticateSubscription)
      this.authenticateSubscription.unsubscribe();
  }

  public login() {
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authenticateSubscription = this.authService.authenticate(userName, password).subscribe(
      {
        next: () => {
          this.router.navigate(['user', userName])
        },
        error: () => {
          this.loginForm.reset();
          if (this.platformDetector.isBrowser())
            this.userNameInputElement.nativeElement.focus();
        }
      })
  }

}
