import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user:any;

  constructor(private userSer:UsersService,private router:Router) { }

  addUserForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern("^[0-9]+$")])
  }); 


  ngOnInit(): void { }

  saveUser() {
   this.user= this.addUserForm.value;
     this.userSer.createUser(this.user).subscribe((response: any) => {
      alert("register successfully");
      this.addUserForm.reset();
      this.router.navigate(['/login']); 
    },
    error => {
      alert("user already exist");
      this.router.navigate(['/signup']);
    }
    );
   
}
  
}
