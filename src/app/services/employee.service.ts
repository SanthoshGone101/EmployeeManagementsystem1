import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl='https://localhost:44369/api';

  constructor(private http:HttpClient) { }

  GetEmployee(){
    return this.http.get(this.baseUrl+'/Employee');
  }
  CreateEmployee(employee:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post(this.baseUrl+'/Employee',employee,httpOptions);
  }
  GetEmployeeById(id:any){
    return this.http.get(this.baseUrl+'/Employee/'+id);
  }
  RemoveEmployeeById(id:any){
    return this.http.delete(this.baseUrl+'/Employee/'+id,{responseType:'text'});
  }
  updateEmployee(employee:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.put(this.baseUrl+'/Employee',employee,httpOptions);
  }
  
}
