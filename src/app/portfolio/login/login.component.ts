import { Component } from '@angular/core';
import { AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username!:string;
pin!:string;
 errorMessage = '';
 loading:boolean =false;
constructor(private auth: AuthService, private router:Router){}
onSubmit(){
  this.loading =true;
  this.auth.login(this.username, this.pin).subscribe((data:any)=>{
    localStorage.setItem('token',data.token);
    this.loading = false;
    this.router.navigate(['/profile']); 
  }, (error)=>{
    console.log('Login Err', error)
    this.errorMessage = 'User Pin is invalid'
  })
}
}
