import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    try {
      let token = localStorage.getItem('token');
      let payload = JSON.parse(window.atob(token.split('.')[1]));
      let userId = payload['UserId'];
      let loginId = payload['LoginId'];
      let userTypeId = payload['UserTypeId'];
      let tokenExp = payload['exp'];
      let currentTimeSpan = (new Date().getTime())/1000;
      let isExpired = (tokenExp-currentTimeSpan)<0;
      if (userId != null && loginId != null && userTypeId != null && !isExpired) {
        return true;
      } else {
        return false;
      }
    }
    catch(err){
      //this.appService.redirect('user/login')
    }
  }

  public isLocked(): boolean {

    let isLocked = null;
    const remember = localStorage.getItem('remember');
    if (remember && remember === 'true') {
      isLocked = localStorage.getItem('locked');
    } else {
      isLocked = sessionStorage.getItem('locked');
    }

    return isLocked === 'true';
  }

  public logout(loginId: string) {
    const paramObj = new HttpParams()
      .set('loginId', loginId)
    return this.http.get(environment.apiUrl + '/user/logout', { params: paramObj })
  }
  public login(credentials) {
    const paramObj = new HttpParams()
     .set('loginId', credentials.loginId)
     .set('loginPassword', credentials.loginPassword);
   const header = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
   return this.http.get(environment.apiUrl + '/user/login', { headers: header, params: paramObj });
  }
  IsPermittedModule(moduleId:number):boolean{
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    if(userRole==='Admin'){ return true;}
    
    let assignedModules = JSON.parse(localStorage.getItem('assignedPages')) as any[];
    if(assignedModules.some(m=>m.ModuleID===moduleId)){
    
      return true;
    }
    else{
      false;
    }
  }
  IsPermittedPage(pageId:number):boolean{
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    if(userRole==='Admin'){return true;} 
    let assignedPages = JSON.parse(localStorage.getItem('assignedPages')) as any[];
    if(assignedPages.some(p=>p.PageID===pageId)){
      return true;
    }
    else{
      return false;
    }
  }
  public retrieve(email: string) {
    const retrieveUrl = environment.apiUrl + '/retrieve';
    const body = new HttpParams().set('email', email);
    return this.http.post(retrieveUrl, body);
  }
  public static getLoggedUserTypeId():number{
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return payLoad['UserTypeId'] as number;
    
  }
}
