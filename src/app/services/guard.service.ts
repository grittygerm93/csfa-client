import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Deactivating} from "../models";
import {Observable} from "rxjs";

@Injectable()
export class GuardService implements CanActivate, CanDeactivate<Deactivating> {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

/*    let num = parseInt(route.params['num'])
      return new Promise((resolve, reject) => {
         if (num % 2 > 0) {
           resolve(confirm('Its an odd number, proceed?'));

           // alert('only even number');
           // reject(false);
           // resolve(false);
         } else {
           resolve(true);
         }
       });*/
    return true;
  }

  canDeactivate(component: Deactivating, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.evaluate())
      return new Promise((resolve, reject) => {
        resolve(confirm('are you sure you want to leave?'))
      })
    return true;
  }


}
