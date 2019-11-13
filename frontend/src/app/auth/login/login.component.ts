import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from './../auth.service';
import { NavbarComponent } from './../../shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.redirectIfLogged();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['jose@email.com'],
      password: ['jose123']
    });
  }

  onSubmit() {
    
    const formData = this.formGroup.getRawValue();

    this.authService.login(formData);
  }

  

  isLogged(): boolean {
    const access_token = localStorage.getItem('access_token');
    return !!access_token;
  }

  redirectIfLogged() {
    if(this.isLogged()) {
      this.router.navigate(['/home']);
    }
  }
}
