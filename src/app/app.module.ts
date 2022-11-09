import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './user/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { UserService } from './services/user.service';
import { EmployeeComponent } from './employee-module/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { AddEmployeeComponent } from './employee-module/add-employee/add-employee.component';
import { GetDesignationComponent } from './designation/get-designation/get-designation.component';
import { AddDesignationComponent } from './designation/add-designation/add-designation.component';
import { GetPaymantRulesComponent } from './payment-rules/get-paymant-rules/get-paymant-rules.component';
import { AddPaymentComponent } from './payment-rules/add-payment/add-payment.component';
import { DesignationService } from './services/designation.service';
import { PaymentService } from './services/payment.service';
import { LoginComponent } from './user/login/login.component';
import { GetWorkingHoursComponent } from './working-hours/get-working-hours/get-working-hours.component';
import { AddWorkingHoursComponent } from './working-hours/add-working-hours/add-working-hours.component';
import { GetRequestLeaveComponent } from './request-leave/get-request-leave/get-request-leave.component';
import { AddRequestLeaveComponent } from './request-leave/add-request-leave/add-request-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    GetDesignationComponent,
    AddDesignationComponent,
    GetPaymantRulesComponent,AddPaymentComponent,
    LoginComponent,
    GetWorkingHoursComponent,
    AddWorkingHoursComponent,
    GetRequestLeaveComponent,
    AddRequestLeaveComponent
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
   
   
  ],
  providers: [UserService,EmployeeService,DesignationService,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
