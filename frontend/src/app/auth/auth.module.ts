// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

//Personal Modules
import { AuthRoutingModule } from './auth-routing.module';

//Personal Components
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordRecoveryComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    NavbarComponent
  ]
})
export class AuthModule { }
