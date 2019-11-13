import { NavbarComponent } from './../shared/navbar/navbar.component';
// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Personal Modules
import { AuthRoutingModule } from './auth-routing.module';

//Personal Components
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    NavbarComponent
  ]
})
export class AuthModule { }
