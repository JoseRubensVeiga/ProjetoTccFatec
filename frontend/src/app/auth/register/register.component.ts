import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      password_confirmation: [null]
    });
  }

  goToLogin() {
    this.router.navigate(['./../login'], {
      relativeTo: this.activatedRoute
    });
  }

  onSubmit() {
    const formData = this.formGroup.getRawValue();

    this
      .authService
      .register(formData)
      .subscribe((response: any) => {
        console.log(response);
      }, (httpErrorResponse: any) => {
        console.error(httpErrorResponse);
      });
  }

}
