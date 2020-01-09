import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../auth/auth.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  tokenType: string;
  accessToken: string;

  constructor(private auth: AuthService) {
    this.tokenType = this.auth.getTokenType();
    this.accessToken = this.auth.getToken();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.tokenType} ${this.accessToken}`
      }
    });
    return next.handle(request);
  }
}