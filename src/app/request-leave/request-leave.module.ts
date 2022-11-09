import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetRequestLeaveComponent } from './get-request-leave/get-request-leave.component';
import { AddRequestLeaveComponent } from './add-request-leave/add-request-leave.component';



@NgModule({
  declarations: [
    GetRequestLeaveComponent,
    AddRequestLeaveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RequestLeaveModule { }
