import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  baseUrl='https://localhost:44369/api';

  constructor(private http:HttpClient) { }

  GetDesignation(){
    return this.http.get(this.baseUrl+'/Designation');
  }
  CreateDesignation(designation:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post(this.baseUrl+'/Designation',designation,httpOptions);
  }
  GetDesignationById(id:any){
    return this.http.get(this.baseUrl+'/Designation/'+id);
  }
  RemoveDesignationById(id:any){
    return this.http.delete(this.baseUrl+'/Designation/'+id,{responseType:'text'});
  }
  updateDesignation(design:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.put(this.baseUrl+'/Designation',design,httpOptions);
  }
  
}
