import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from './../auth.service';
import { NavbarComponent } from './../../shared/navbar/navbar.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  showErrorContainer: boolean;
  showErrorAlert: boolean;
  errorMessage: string;

  isLoading: boolean;



  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.redirectIfLogged();

    this.showErrorAlert = false;
    this.showErrorContainer = false;

    authService.errorEmitter.subscribe((response: {message: string}) => {
      this.onShowErrorAlert(response.message);
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['jose@email.com'],
      password: ['jose123']
    });
  }

  onSubmit() {
    const formData = this.formGroup.getRawValue();

    this.isLoading = true;

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

  onShowErrorAlert(message: string): void {
    this.showErrorContainer = true;
    this.errorMessage = message;

    timer(300).subscribe(() => {
      this.showErrorAlert = true;
    });
  }

  hideErrorAlert(): void {
    this.showErrorAlert = false;

    timer(300).subscribe(() => {
      this.showErrorContainer = false;
      this.errorMessage = "";
    });
  }

}
