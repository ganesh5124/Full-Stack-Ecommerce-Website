import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { login } from 'src/app/app';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new  FormControl(''),
    password: new FormControl('')
  })
  constructor (
    public login : LoginService,
    public auth : AuthService,
    public route:Router
  ){}

  ngOnInit(){
    if(this.auth.isLoggedIn()){
      this.route.navigate(['header'])
    }
    
  }
 

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((response:login)=>{
        console.log(response);
        this.route.navigate(['header'])
      },(err:Error)=>{
        console.log(err);
      })
    }
    console.log(this.loginForm.value);
    
  }
}
