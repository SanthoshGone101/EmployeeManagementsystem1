import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }
  EmployeeData:any;

  ngOnInit(): void {
    this.LoadEmployee();
  }
  LoadEmployee(){
     this.service.GetEmployee().subscribe(data=>{
      this.EmployeeData=data;
     console.log(this.EmployeeData);

    })
  }
  delete(ID:any){
    this.service.RemoveEmployeeById(ID).subscribe(data=>{
      this.LoadEmployee();
      alert("deleted Successfully");
    })
  }

}
