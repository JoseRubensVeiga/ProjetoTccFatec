import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.router.url == "/" || this.router.url == "/auth") {
      this.router.navigate(['/auth/login']);
    }
  }

}
