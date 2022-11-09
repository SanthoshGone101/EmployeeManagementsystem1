import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkingHoursService {

  baseUrl='https://localhost:44369/api';

  constructor(private http:HttpClient) { }

  GetWorkingHour(){
    return this.http.get(this.baseUrl+'/WorkingHour');
  }
  CreateWorkingHour(WorkingHour:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post(this.baseUrl+'/WorkingHour',WorkingHour,httpOptions);
  }
  GetWorkingHrById(id:any){
    return this.http.get(this.baseUrl+'/WorkingHour/'+id);
  }
  RemoveWorkingHrById(id:any){
    return this.http.delete(this.baseUrl+'/WorkingHour/'+id,{responseType:'text'});
  }
  updateWorkingHr(id:any,WorkingHour:any){
    
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.put(this.baseUrl+'/WorkingHour/'+id,WorkingHour,httpOptions);
  }
}
