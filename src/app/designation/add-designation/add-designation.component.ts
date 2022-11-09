import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

  messageclass=''
  message=''
 departmentName:any
 editdata:any;
   constructor(private service:DesignationService, private route:ActivatedRoute) { 
     this.departmentName=this.route.snapshot.paramMap.get('designationName');
     if(this.departmentName!=null){
     this.GetDesignationByid(this.departmentName);
     }
     //console.log(this.EmployeeId);
   }
 
   ngOnInit(): void {
    // this.SaveEmployee();
    
   }
   AddDesignationForm = new FormGroup({
    slNo:new FormControl(Validators.required),
    designationName: new FormControl("",Validators.required),
    roleName: new FormControl("",Validators.required),
    departmentName: new FormControl("",Validators.required),
 })
 SaveDesignation(){
   if(this.AddDesignationForm.valid){
     this.service.CreateDesignation(this.AddDesignationForm.value).subscribe(result=>{
       //console.log(result);
       if(result!=null){
         alert("inserted Successfully");
         this.clearDesignation();
       }
     });
   }
   else{
   alert("Error Occured")
   }
   //console.log(this.AddEmployeeForm.value);
 }
 
 clearDesignation(){
   this.AddDesignationForm = new FormGroup({
     slNo:new FormControl(),
     designationName: new FormControl(""),
     roleName: new FormControl(""),
     departmentName: new FormControl(""),
     
 })
 }
 GetDesignationByid(Id:any){
   this.service.GetDesignationById(Id).subscribe(data=>{
     this.editdata=data;
     console.log(data);
   
   console.log(this.editdata);
   this.AddDesignationForm = new FormGroup({
    slNo:new FormControl({value:this.editdata.slNo,disabled:true}),
    designationName: new FormControl(this.editdata.designationName),
    roleName: new FormControl(this.editdata.roleName),
    departmentName: new FormControl(this.editdata.departmentName)
 });
 });
 
   
 }
 UpdateDesign(){
  if(this.AddDesignationForm.valid){
   this.service.updateDesignation(this.AddDesignationForm.value).subscribe(data=>{
    console.log(data);
    if(data!=null){
      alert("inserted Successfully");
      this.clearDesignation();
    }
   });
  }
  else{
    alert("Error Occured")
    }
 }

}
