import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from 'src/app/Module/Jwt';
import { Utilisateur } from 'src/app/Module/Utilisateur';
import { JwtService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  users: Utilisateur[] | undefined;
  userCount: number | undefined;
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
    this.service.login(this.loginForm.value).subscribe(
      (response: Jwt) => {
        const jwToken = response.token;
        localStorage.setItem('jwt', jwToken);
        this.loadUserRole();
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  private loadUserRole(): void {
    this.service.getAllUsers().subscribe(
      (users: Utilisateur[]) => {
        const user = users.find(u => u.email === this.loginForm.value.email);
        if (user?.role === 'ADMIN') {
          this.router.navigateByUrl('/admin-dashboard');
        } else {
          this.loadUserDashboard();
        }
      },
      (error) => {
        if (error.status === 403) {
          console.error('Error fetching users', error);
        }
      }
    );
  }

  private loadUserDashboard(): void {
    this.service.getUserCount().subscribe(
      (count: number) => {
        this.userCount = count;
        this.router.navigateByUrl('/user-dashboard');
      },
      (error) => {
        console.error('Error fetching user count', error);
      }
    );
  }

}
