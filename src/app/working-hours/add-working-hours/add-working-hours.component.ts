import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkingHoursService } from 'src/app/services/working-hours.service';

@Component({
  selector: 'app-add-working-hours',
  templateUrl: './add-working-hours.component.html',
  styleUrls: ['./add-working-hours.component.css']
})
export class AddWorkingHoursComponent implements OnInit {

  

  showupdate!: boolean;
  showAdd!:boolean;
WorkingHrId:any;
editdata:any;
  constructor(private service:WorkingHoursService, private route:ActivatedRoute) { 
    this.WorkingHrId=this.route.snapshot.paramMap.get('slNo');
    if(this.WorkingHrId!=null){
    this.GetWorkingHrByid(this.WorkingHrId);
    }
    //console.log(this.EmployeeId);
  }

  ngOnInit(): void {
   // this.SaveEmployee();
   
  }
  AddWorkingHrForm = new FormGroup({
    slNo:new FormControl({value:0,disabled:true}),
    companyHour: new FormControl("",Validators.required),
    employeeHour: new FormControl('',Validators.required),
    monthlyCompanyHour: new FormControl("",Validators.required),
    monthlyEmployeeHour: new FormControl("",Validators.required)
    }
    )
    ClickOnAdd(){
      this.showAdd=true;
      this.showupdate=false;
    }
SaveWorkingHr(){
  if(this.showAdd==true){
  if(this.AddWorkingHrForm.valid){
    this.service.CreateWorkingHour(this.AddWorkingHrForm.value).subscribe(result=>{
      console.log(result);
      if(result!=null){
        alert("inserted Successfully");
        this.clearWorkingHr();
      }
    });
  }

  else{
  alert("Error Occured")
  }}
  //console.log(this.AddEmployeeForm.value);
}

clearWorkingHr(){
  this.AddWorkingHrForm = new FormGroup({
    slNo:new FormControl(),
    companyHour: new FormControl(""),
    employeeHour: new FormControl(''),
    monthlyCompanyHour: new FormControl(""),
    monthlyEmployeeHour: new FormControl("")
})
}
GetWorkingHrByid(Id:any){
  this.service.GetWorkingHrById(Id).subscribe(data=>{
    this.editdata=data;
    console.log(data);
  
  console.log(this.editdata);
  this.AddWorkingHrForm = new FormGroup({
    slNo:new FormControl({value:this.editdata.slNo,disabled:true}),
    companyHour: new FormControl(this.editdata.companyHour),
    employeeHour: new FormControl(this.editdata.employeeHour),
    monthlyCompanyHour: new FormControl(this.editdata.monthlyCompanyHour),
    monthlyEmployeeHour: new FormControl(this.editdata.monthlyEmployeeHour)
    
});
});

  
}
UpdateWorkingHr(id:any){
  
  if(this.AddWorkingHrForm!=null){
   
    this.service.updateWorkingHr(id,this.AddWorkingHrForm.value).subscribe(data=>{
   console.log(id);
   if(data!=null){
    alert("Updated Successfully");
    
    this.clearWorkingHr();

  
   
  }
});
}
}

}





