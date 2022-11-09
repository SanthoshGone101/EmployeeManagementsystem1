import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-get-designation',
  templateUrl: './get-designation.component.html',
  styleUrls: ['./get-designation.component.css']
})
export class GetDesignationComponent implements OnInit {

  constructor(private service:DesignationService) { }
  designationData:any;

  ngOnInit(): void {
    this.LoadDesignation();
  }
  LoadDesignation(){
     this.service.GetDesignation().subscribe(data=>{
      this.designationData=data;
     console.log(this.designationData);

    })
  }
  delete(ID:any){
    this.service.RemoveDesignationById(ID).subscribe(data=>{
      this.LoadDesignation();
      alert("deleted Successfully");
    })
  }

}
