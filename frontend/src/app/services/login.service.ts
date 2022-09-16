import { Injectable,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private route:Router) { }
  isLoggedin = false;

    login() {
        this.isLoggedin = true;
         this.route.navigate(['/']);
    }  
    logout() {
        this.isLoggedin = false;
        this.route.navigate(['/login']);
    }
}
