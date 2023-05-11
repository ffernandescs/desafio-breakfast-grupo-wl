import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

   canActivate(): boolean {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token; 

    if (!isLoggedIn) {
      this.router.navigate(['/login']); 
    }

    return isLoggedIn;
  }

 
  
  
  
}
