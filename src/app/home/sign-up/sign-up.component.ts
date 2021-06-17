import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lowerCase.validator';
import { INewUser } from './INewUser';
import { SignUpService } from './sign-up.service';
import { UserNameTakenValidatorService } from './user-name-taken.validator.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userNameTakenService: UserNameTakenValidatorService, private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', [Validators.required, lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)], this.userNameTakenService.Validator()],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    })
  }

  submit() {
    const newUser = this.signUpForm.getRawValue() as INewUser;
    this.signUpService.signUp(newUser).subscribe(
      () => this.router.navigate(['']),
      (err: Error) => {
        alert(err.message);
        this.signUpForm.reset()
      }
    )
  }

}
