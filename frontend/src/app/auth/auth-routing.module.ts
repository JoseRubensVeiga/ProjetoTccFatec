//Angular Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Personal Components
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './../guards/auth.guard';

const authRoutes: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
