import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private route : Router,
    private jwtHelpService: JwtHelperService) {  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken !== null
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login'])
  }

  login({username, password}:any):Observable<any>{
    if(username === 'user@123' && password === 'user'){
      this.setToken('alebaalealealebathandana')
      return of({name:'Ganesh', email:'pvgkumar2001@gmail.com'})
    }

     throw new Error("Failed to login")
    
  }

  isAuthenticated(){
    const token = localStorage.getItem('token')
    console.log(this.jwtHelpService.isTokenExpired(token), 'isTokenexpired');
    // return true
     return !this.jwtHelpService.isTokenExpired(token)
  }

  
}
