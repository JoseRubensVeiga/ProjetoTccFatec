import { AuthService } from './../../auth/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

}
