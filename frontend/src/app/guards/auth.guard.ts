import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    
    if(this.isLogged()) {
      return true;
    }

    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
