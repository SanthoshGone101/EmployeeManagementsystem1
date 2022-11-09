import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class EmployeeModuleModule { }
