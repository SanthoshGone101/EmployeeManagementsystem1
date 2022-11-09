import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.registerSubmitted();
    
  }
  loginForm = new FormGroup({
   
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
    

  });
  

LoggedIn(){
  if(this.loginForm.valid){
    this.userService.UserLogin(this.loginForm.value).subscribe(result=>{
      console.log(result);
      if(result!=null){
        alert("Login Successfull");
        //this.clearPayment();
      }
    });
  }
  else{
  alert("Enter valid details");
  }
  //console.log(this.AddEmployeeForm.value);
}

 
  
  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }

  


}
