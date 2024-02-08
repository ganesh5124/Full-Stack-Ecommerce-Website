import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private route: Router){

  }
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): boolean {
      console.log(this.auth.isLoggedIn());
      
      if(!this.auth.isLoggedIn()){
        this.route.navigate(['/login'])
        return false;
      }
      console.log(this.auth.isLoggedIn());
      
    return this.auth.isLoggedIn();
  }
  
}

