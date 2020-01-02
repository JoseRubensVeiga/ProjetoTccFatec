import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
//Angular Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Personal Components
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

const authRoutes: Routes = [
    {
      path: 'auth', component: AuthComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'password-recovery', component: PasswordRecoveryComponent}
      ]
    },
    {
      path: '', component: AuthComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
