import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestLeaveService } from 'src/app/services/request-leave.service';

@Component({
  selector: 'app-add-request-leave',
  templateUrl: './add-request-leave.component.html',
  styleUrls: ['./add-request-leave.component.css']
})
export class AddRequestLeaveComponent implements OnInit {

  messageclass=''
  message=''
 LeaveId:any;
 editdata:any;
   constructor(private service:RequestLeaveService, private route:ActivatedRoute) { 
     this.LeaveId=this.route.snapshot.paramMap.get('slNo');
     if(this.LeaveId!=null){
     this.GetRequestLeaveByid(this.LeaveId);
     }
     //console.log(this.EmployeeId);
   }
 
   ngOnInit(): void {
    // this.SaveEmployee();
    
   }
   AddLeaveForm = new FormGroup({
     slNo:new FormControl({value:'',disabled:true}),
     leaveType: new FormControl("",Validators.required),
     dateOfLeave: new FormControl('',Validators.required),
     endOfLeave: new FormControl("",Validators.required),
     reason: new FormControl("",Validators.required)
     
 
 })
 SaveRequestLeave(){
   if(this.AddLeaveForm.valid){
     this.service.CreateRequestLeave(this.AddLeaveForm.value).subscribe(result=>{
       console.log(result);
       if(result!=null){
         alert("inserted Successfully");
         this.clearrequestLeave();
       }
     });
   }
   else{
   alert("Error Occured")
   }
   //console.log(this.AddEmployeeForm.value);
 }
 
 clearrequestLeave(){
   this.AddLeaveForm = new FormGroup({
    slNo:new FormControl(),
     leaveType: new FormControl(""),
     dateOfLeave: new FormControl(''),
     endOfLeave: new FormControl(""),
     reason: new FormControl(""),
 })
 }
 GetRequestLeaveByid(Id:any){
   this.service.GetRequestLeaveById(Id).subscribe(data=>{
     this.editdata=data;
     console.log(data);
   
   console.log(this.editdata);
   this.AddLeaveForm = new FormGroup({
    slNo:new FormControl({value:this.editdata.slNo,disabled:true}),
    leaveType: new FormControl(this.editdata.leaveType),
    dateOfLeave: new FormControl(this.editdata.dateOfLeave),
    endOfLeave: new FormControl(this.editdata.endOfLeave),
    reason: new FormControl(this.editdata.reason)
     
 });
 });
 
   
 }
 UpdateRequestLeave(){
   if(this.AddLeaveForm.valid){
   this.service.updaterequestLeave(this.AddLeaveForm.value).subscribe(data=>{
    console.log(data);
    if(data!=null){
     alert("inserted Successfully");
     this.clearrequestLeave();
   }
    
   });
 }
 else{
   alert("Error Occured")
   }
 
 
 }
 
}
