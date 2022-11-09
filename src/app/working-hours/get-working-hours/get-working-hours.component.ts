import { Component, OnInit } from '@angular/core';
import { WorkingHoursService } from 'src/app/services/working-hours.service';

@Component({
  selector: 'app-get-working-hours',
  templateUrl: './get-working-hours.component.html',
  styleUrls: ['./get-working-hours.component.css']
})
export class GetWorkingHoursComponent implements OnInit {

  constructor(private service:WorkingHoursService) { }
  WorkingHrData:any;

  ngOnInit(): void {
    this.LoadWorkingHr();
  }
  LoadWorkingHr(){
     this.service.GetWorkingHour().subscribe(data=>{
      this.WorkingHrData=data;
     console.log(this.WorkingHrData);

    })
  }
  delete(ID:any){
    this.service.RemoveWorkingHrById(ID).subscribe(data=>{
      this.LoadWorkingHr();
      alert("deleted Successfully");
    })
}

}
