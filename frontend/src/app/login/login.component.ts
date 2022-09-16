import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interface/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 


  constructor(private userSer:UsersService,private router:Router,private loginser :LoginService) { }
  loginForm= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern("^[0-9]+$")])
  });

  ngOnInit(): void {
  }

  onLogin(){
   
  }

  getUser(){
      this.userSer.getUsers().subscribe((res:any)=>{
       const user = res.find((item:any)=>{
        return item.username === this.loginForm.value.username;
       })
      if(!user){
        alert('user not found');
        this.loginForm.reset();
      }
      else if(sessionStorage.getItem('loggedUser') === user['username']){
         alert("user already exist");
         this.loginForm.reset();
         this.router.navigate(['/'])
       }
       else{
        alert("login Successful");
        this.loginser.login();
        sessionStorage.setItem('isLoggedIn','true');
        sessionStorage.setItem('loggedUser',user['username']);
       } 
      })    
  
  }

}
