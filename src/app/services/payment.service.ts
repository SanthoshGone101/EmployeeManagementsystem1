import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl='https://localhost:44369/api';

  constructor(private http:HttpClient) { }

  GetPayment(){
    return this.http.get(this.baseUrl+'/PaymentRules');
  }
  CreatePayment(Payment:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post(this.baseUrl+'/PaymentRules',Payment,httpOptions);
  }
  GetPaymentById(id:any){
    return this.http.get(this.baseUrl+'/PaymentRules/'+id);
  }
  RemovePaymentById(id:any){
    return this.http.delete(this.baseUrl+'/PaymentRules/'+id,{responseType:'text'});
  }
  updatePayment(Payment:any){
    const httpOptions={headers : new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.put(this.baseUrl+'/PaymentRules',Payment,httpOptions);
  }
  
}
