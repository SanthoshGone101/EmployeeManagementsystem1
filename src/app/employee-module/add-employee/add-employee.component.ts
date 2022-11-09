import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  
})
export class AddEmployeeComponent implements OnInit {
 messageclass=''
 message=''
EmployeeId:any;
editdata:any;
  constructor(private service:EmployeeService, private route:ActivatedRoute) { 
    this.EmployeeId=this.route.snapshot.paramMap.get('employeeID');
    if(this.EmployeeId!=null){
    this.GetEmployeeByid(this.EmployeeId);
    }
    //console.log(this.EmployeeId);
  }

  ngOnInit(): void {
   // this.SaveEmployee();
   
  }
  AddEmployeeForm = new FormGroup({
    employeeID:new FormControl("",Validators.required),
    employeeName: new FormControl("",Validators.required),
    phoneNumber: new FormControl("",Validators.required),
    mailId: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),

})
SaveEmployee(){
  if(this.AddEmployeeForm.valid){
    this.service.CreateEmployee(this.AddEmployeeForm.value).subscribe(result=>{
      //console.log(result);
      if(result!=null){
        alert("inserted Successfully");
        this.clearEmployee();
      }
    });
  }
  else{
  alert("Error Occured")
  }
  //console.log(this.AddEmployeeForm.value);
}

clearEmployee(){
  this.AddEmployeeForm = new FormGroup({
    employeeID:new FormControl(""),
    employeeName: new FormControl(""),
    phoneNumber: new FormControl(""),
    mailId: new FormControl(""),
    address: new FormControl("")
})
}
GetEmployeeByid(Id:any){
  this.service.GetEmployeeById(Id).subscribe(data=>{
    this.editdata=data;
    console.log(data);
  
  console.log(this.editdata);
  this.AddEmployeeForm = new FormGroup({
    employeeID:new FormControl(this.editdata.employeeID),
    employeeName: new FormControl(this.editdata.employeeName),
    phoneNumber: new FormControl(this.editdata.phoneNumber),
    mailId: new FormControl(this.editdata.mailId),
    address: new FormControl(this.editdata.address)
});
});

  
}
UpdateEmploy(){
  if(this.AddEmployeeForm.valid){
  this.service.updateEmployee(this.AddEmployeeForm.value).subscribe(data=>{
   console.log(data);
   if(data!=null){
    alert("inserted Successfully");
    this.clearEmployee();
  }
  });
}
else{
  alert("Error Occured")
  }

}
}
