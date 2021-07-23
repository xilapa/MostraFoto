import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public activatedRouteSubs: Subscription;
  public routeParam: string = null;
  @ViewChild('userNameInput') userNameInputElement: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private platformDetector: PlatformDetectorService
  ) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.activatedRouteSubs = this.activatedRoute.queryParamMap.subscribe(
      params => this.routeParam = params.get('fromUrl')
    )
  }
  
  ngAfterViewInit(): void {
    if (this.platformDetector.isBrowser())
      this.userNameInputElement.nativeElement.focus();
  }

  ngOnDestroy(): void {
    if (this.authenticateSubscription)
      this.authenticateSubscription.unsubscribe();
    this.activatedRouteSubs.unsubscribe();
  }

  public login() {
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authenticateSubscription = this.authService.authenticate(userName, password).subscribe(
      {
        next: () => {
          if (this.routeParam == null)
            this.router.navigate(['user', userName])
          else
            this.router.navigateByUrl(this.routeParam)
        },
        error: () => {
          this.loginForm.reset();
          if (this.platformDetector.isBrowser())
            this.userNameInputElement.nativeElement.focus();
        }
      })
  }

}
