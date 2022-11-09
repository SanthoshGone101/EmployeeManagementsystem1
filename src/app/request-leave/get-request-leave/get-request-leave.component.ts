import { Component, OnInit } from '@angular/core';
import { RequestLeaveService } from 'src/app/services/request-leave.service';

@Component({
  selector: 'app-get-request-leave',
  templateUrl: './get-request-leave.component.html',
  styleUrls: ['./get-request-leave.component.css']
})
export class GetRequestLeaveComponent implements OnInit {

  constructor(private service:RequestLeaveService) { }
  LeaveData:any;

  ngOnInit(): void {
    this.LoadRequestLeave();
  }
  LoadRequestLeave(){
     this.service.GetRequestLeave().subscribe(data=>{
      this.LeaveData=data;
     console.log(this.LeaveData);

    })
  }
  delete(ID:any){
    this.service.RemoveLeaveById(ID).subscribe(data=>{
      this.LoadRequestLeave();
      alert("deleted Successfully");
    })
}

}
