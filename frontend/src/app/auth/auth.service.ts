import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from './../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const url = API_URL + "/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(this.hasAccessToken());
  errorEmitter = new EventEmitter();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(formData: {login: string, password: string}): void {
    this.http.post<any>(`${url}/login`, formData).subscribe((response: any) => {
      this.setLoggedIn(response);
      this.router.navigate(['/home']);
    }, (httpErrorResponse: HttpErrorResponse) => {
      const error = httpErrorResponse.error;
      const errorMessage = error.message;

      if(errorMessage == "Unauthorized") {
        this.errorEmitter.emit({
          message: "Login e/ou senha incorretos"
        });
      }
    })
  }

  logout(): Observable<any> {
    this.setLoggedOut();
    return this.http.post<any>(`${url}/logout`, {});
  }

  register(formData: any): Observable<any> {
    return this.http.post<any>(`${url}/register`, formData);
  }

  recovery(email: string): Observable<any> {
    return this.http.post<any>(`${url}/forgot-password`, {email: email});
  }

  refresh(): void {
    this
      .http
      .post<any>(`${url}/refresh`, {})
      .subscribe(response => this.setLoggedIn(response))
  }

  me(): Observable<any> {
    return this.http.post<any>(`${url}/me`, {});
  }

  hasAccessToken() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  getTokenType() {
    return localStorage.getItem("token_type");
  }

  setLoggedIn(tokenData: {access_token: string, token_type: string}) {
    const accessToken = tokenData.access_token;
    const tokenType = tokenData.token_type;
    this.loggedIn.next(true);

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('token_type', tokenType);
  }

  setLoggedOut() {
    localStorage.removeItem("access_token");
    localStorage.removeItem('token_type');
    this.loggedIn.next(false);
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
