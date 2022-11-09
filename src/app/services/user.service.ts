import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user/add-user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl='https://localhost:44369/api';

  registerUser(register:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
  return this.http.post(this.baseUrl+ '/User/register',register,httpOptions);
  }

  UserLogin(login:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
  return this.http.post(this.baseUrl+ '/User/login',login,httpOptions);
  }
}
