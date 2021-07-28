import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        const findToken = localStorage.getItem("accessToken")
        
        if(findToken) {
          return true
        }else{
          this.router.navigate(['/login'])
          return false
        }


      // return this.authServ.verify.pipe(
      //   take(1), map( user => {
      //     if(user){
      //       return true
      //     }else{
      //       // redirect
      //       this.router.navigate(['/login'])
      //       return false
      //     }
      //   })
      // )

  }
  
}
