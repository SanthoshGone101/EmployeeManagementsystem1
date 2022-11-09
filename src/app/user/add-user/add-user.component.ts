import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from './User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    //this.registerSubmitted();
    
  }
  registerForm = new FormGroup({
   
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    cofirmPassword: new FormControl("")

  });
  

registerSubmitted(){
  if(this.registerForm.valid){
    this.userService.registerUser(this.registerForm.value).subscribe(result=>{
      console.log(result);
      if(result!=null && this.Password==this.ConfirmPassword){
       
        
        alert("registered Successfully");
        this.router.navigate(['user/login']);
        //this.clearPayment();
      
    }
    else{
      console.error();
      
    }
    });
  }
  else{
  alert("Error Occured")
  }
  //console.log(this.AddEmployeeForm.value);
}

 
  
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }

  get ConfirmPassword(): FormControl{
    return this.registerForm.get("cofirmPassword") as FormControl;
  }

}
