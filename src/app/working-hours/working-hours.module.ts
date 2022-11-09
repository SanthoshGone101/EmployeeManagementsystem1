import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetWorkingHoursComponent } from './get-working-hours/get-working-hours.component';
import { AddWorkingHoursComponent } from './add-working-hours/add-working-hours.component';



@NgModule({
  declarations: [
    GetWorkingHoursComponent,
    AddWorkingHoursComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkingHoursModule { }
