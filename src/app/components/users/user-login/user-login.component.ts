import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [AuthService]
})
export class UserLoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      if (user) { 
        localStorage.setItem('email', email); //Save user data in the local storage
        this.router.navigate(['bienvenido']);   //Redirect to homepage
      }
    }
    catch (error) { }
  }
}
