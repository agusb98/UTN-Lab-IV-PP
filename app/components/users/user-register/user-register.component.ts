import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService, 
    private router: Router, 
    ) { }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authService.register(email, password);
      if (user) {
        localStorage.setItem('email', email); //Save user data in the local storage
        this.router.navigate(['/bienvenido']);  //Redirect to homepage
      }
    }
    catch (error) { }
  }
}
