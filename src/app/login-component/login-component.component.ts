import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  name$: Observable<string>;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        'userName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }
    );
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.name$ = this.userName.valueChanges;
    this.userName.valueChanges.subscribe(val => {
      console.log(val);
    });
  }

  onSubmit(value: any) {
    console.log(value);
  }
  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }
}
