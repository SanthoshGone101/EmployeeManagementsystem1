import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPaymantRulesComponent } from './get-paymant-rules/get-paymant-rules.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';



@NgModule({
  declarations: [
    GetPaymantRulesComponent,
    AddPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentRulesModule { }
