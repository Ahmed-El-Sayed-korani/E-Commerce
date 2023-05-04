import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../Interfaces/register-form';
import { Loginform } from '../Interfaces/loginform';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = "https://route-ecommerce-app.vercel.app"

  userToken:any;

  constructor(private _HttpClient : HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.userToken = localStorage.getItem('token')
    } 
   }

  register(registerForm:RegisterForm): Observable<any>{
    return this._HttpClient.post(this.baseUrl + '/api/v1/auth/signup', registerForm)
  }

  login(Loginform:Loginform): Observable<any>{
    return this._HttpClient.post(this.baseUrl + '/api/v1/auth/signin', Loginform)
  }

  logout(){
    localStorage.removeItem("token")
    this.userToken=""
    this._Router.navigate(['/login'])
  }
}
