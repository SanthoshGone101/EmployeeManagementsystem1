import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-get-paymant-rules',
  templateUrl: './get-paymant-rules.component.html',
  styleUrls: ['./get-paymant-rules.component.css']
})
export class GetPaymantRulesComponent implements OnInit {

  constructor(private service:PaymentService) { }
  PaymentData:any;

  ngOnInit(): void {
    this.LoadPayment();
  }
  LoadPayment(){
     this.service.GetPayment().subscribe(data=>{
      this.PaymentData=data;
     console.log(this.PaymentData);

    })
  }
  delete(ID:any){
    this.service.RemovePaymentById(ID).subscribe(data=>{
      this.LoadPayment();
      alert("deleted Successfully");
    })
}
}
