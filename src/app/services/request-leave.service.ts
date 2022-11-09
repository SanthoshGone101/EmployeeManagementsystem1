import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestLeaveService {

  baseUrl='https://localhost:44369/api';

  constructor(private http:HttpClient) { }

  GetRequestLeave(){
    return this.http.get(this.baseUrl+'/RequestLeave');
  }
  CreateRequestLeave(Leave:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post(this.baseUrl+'/RequestLeave',Leave,httpOptions);
  }
  GetRequestLeaveById(id:any){
    return this.http.get(this.baseUrl+'/RequestLeave/'+id);
  }
  RemoveLeaveById(id:any){
    return this.http.delete(this.baseUrl+'/RequestLeave/'+id,{responseType:'text'});
  }
  updaterequestLeave(Leave:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.put(this.baseUrl+'/RequestLeave',Leave,httpOptions);
  }
  
}
