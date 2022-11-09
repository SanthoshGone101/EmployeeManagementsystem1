import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  messageclass=''
 message=''
PaymentId:any;
editdata:any;
  constructor(private service:PaymentService, private route:ActivatedRoute) { 
    this.PaymentId=this.route.snapshot.paramMap.get('paymentId');
    if(this.PaymentId!=null){
    this.GetPaymentByid(this.PaymentId);
    }
    //console.log(this.EmployeeId);
  }

  ngOnInit(): void {
   // this.SaveEmployee();
   
  }
  AddPaymentForm = new FormGroup({
    paymentId:new FormControl({value:'',disabled:true}),
    paymentType: new FormControl("",Validators.required),
    amount: new FormControl('',Validators.required),
    paymentTime: new FormControl("",Validators.required),
    

})
SavePayment(){
  if(this.AddPaymentForm.valid){
    this.service.CreatePayment(this.AddPaymentForm.value).subscribe(result=>{
      console.log(result);
      if(result!=null){
        alert("inserted Successfully");
        this.clearPayment();
      }
    });
  }
  else{
  alert("Error Occured")
  }
  //console.log(this.AddEmployeeForm.value);
}

clearPayment(){
  this.AddPaymentForm = new FormGroup({
    paymentId:new FormControl(""),
    paymentType: new FormControl(""),
    amount: new FormControl(""),
    paymentTime: new FormControl(),
})
}
GetPaymentByid(Id:any){
  this.service.GetPaymentById(Id).subscribe(data=>{
    this.editdata=data;
    console.log(data);
  
  console.log(this.editdata);
  this.AddPaymentForm = new FormGroup({
    paymentId:new FormControl({value:this.editdata.slNo,disabled:true}),
    paymentType: new FormControl(this.editdata.paymentType),
    amount: new FormControl(this.editdata.amount),
    paymentTime: new FormControl(this.editdata.paymentTime),
    
});
});

  
}
UpdatePayment(){
  if(this.AddPaymentForm.valid){
  this.service.updatePayment(this.AddPaymentForm.value).subscribe(data=>{
   console.log(data);
   if(data!=null){
    alert("inserted Successfully");
    this.clearPayment();
  }
   
  });
}
else{
  alert("Error Occured")
  }


}

}
