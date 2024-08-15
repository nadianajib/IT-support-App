import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JwtService } from '../Service/jwt.service';
import { Jwt } from '../model/jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  
  ){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  submitForm(): void {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(
      (response : Jwt) => {
            const jwToken = response.token;
            localStorage.setItem('jwt', jwToken);
           this.router.navigateByUrl("/Home")
        }
    )
  }
}