import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDesignationComponent } from './get-designation/get-designation.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';



@NgModule({
  declarations: [
    GetDesignationComponent,
    AddDesignationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DesignationModule { }
