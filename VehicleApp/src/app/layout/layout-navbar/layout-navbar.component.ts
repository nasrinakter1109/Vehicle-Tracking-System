import { Component, Input, HostBinding } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;
  userName: string;
  loginID:string;
  remember = false;
  userType:number;
  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar')
  private hostClassMain = true;
  
  constructor(
    private authService: AuthService,
    private appService: AppService, 
    private layoutService: LayoutService) {
    this.isRTL = appService.isRTL;
    const rememberMe = localStorage.getItem('remember');
    if (rememberMe) {
      if (rememberMe === 'true') {
        this.remember = true;
      }
    }
  }

  ngOnInit() {
    this.userType = AuthService.getLoggedUserTypeId();
    //  this.picture = localStorage.getItem('picture');
     this.userName = localStorage.getItem('userName');
    this.loginID = localStorage.getItem('loginID');
  }
  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }

  locked() {
    if (this.remember) {
      localStorage.setItem('locked', 'true');
    } else {
      sessionStorage.setItem('locked', 'true');
    }
    this.appService.redirect('user/locked');
  }

  logout() {
    this.authService.logout(this.loginID)
    .subscribe((response:any)=>{
      if (localStorage.getItem('isRemembered')=='true') {
        localStorage.removeItem('loginID');
        localStorage.removeItem('userName');
        localStorage.removeItem('userTypeID');
        localStorage.removeItem('locked');
        localStorage.removeItem('isRemembered');
      } else {
        sessionStorage.removeItem('loginID');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userTypeID');
        sessionStorage.removeItem('locked');
        sessionStorage.removeItem('isRemembered');
      }
      localStorage.removeItem('token');
      this.appService.redirect('user/login');
    })
  }
}
