import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employee-module/add-employee/add-employee.component';
import { EmployeeComponent } from './employee-module/employee/employee.component';
import { GetDesignationComponent } from './designation/get-designation/get-designation.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddDesignationComponent } from './designation/add-designation/add-designation.component';
import { GetPaymantRulesComponent } from './payment-rules/get-paymant-rules/get-paymant-rules.component';
import { AddPaymentComponent } from './payment-rules/add-payment/add-payment.component';
import { LoginComponent } from './user/login/login.component';
import { GetWorkingHoursComponent } from './working-hours/get-working-hours/get-working-hours.component';
import { AddWorkingHoursComponent } from './working-hours/add-working-hours/add-working-hours.component';
import { GetRequestLeaveComponent } from './request-leave/get-request-leave/get-request-leave.component';
import { AddRequestLeaveComponent } from './request-leave/add-request-leave/add-request-leave.component';

const routes: Routes = [
  { path: 'user/add-user', component: AddUserComponent },
  {path:'employee-module/employee', component:EmployeeComponent},
 {path:'employee-module/add-employee', component:AddEmployeeComponent},
 {path:'employee-module/add-employee/:employeeID', component:AddEmployeeComponent},
 {path:'designation/get-designation', component:GetDesignationComponent},
 {path:'designation/add-designation', component:AddDesignationComponent},
 {path:'designation/add-designation/:designationName', component:AddDesignationComponent},
 {path:'payment-rules/get-payment-rules', component:GetPaymantRulesComponent},
 {path:'payment-rules/add-payment', component:AddPaymentComponent},
 {path:'payment-rules/add-payment/:paymentId', component:AddPaymentComponent},
 { path: 'user/login', component: LoginComponent },
 {path:'working-hours/get-working-hours', component:GetWorkingHoursComponent},
 {path:'working-hours/add-working-hours', component:AddWorkingHoursComponent},
 {path:'working-hours/add-working-hours/:slNo', component:AddWorkingHoursComponent},
 {path:'request-leave/get-request-leave',component:GetRequestLeaveComponent},
 {path:'request-leave/add-request-leave',component:AddRequestLeaveComponent},
 {path:'request-leave/add-request-leave/:slNo',component:AddRequestLeaveComponent}
 
 


 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
