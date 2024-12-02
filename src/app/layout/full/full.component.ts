import { Component, OnInit, HostListener ,Inject,ChangeDetectorRef} from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  active=2;
  hideFooter = false;
  constructor(public router: Router,    
    @Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // console.log('Current URL:', this.router.url); 
          const noFooterRoutes = ['/login', '/product-components/registration'];
          this.hideFooter = noFooterRoutes.some(route => this.router.url.startsWith(route));
          this.cdr.detectChanges();
        }
      });

     }

  tabStatus = 'justified';

  public isCollapsed = false;
  public showSearch = false;
  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;
  public expandLogo = false;
  public loginType;
  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'ltr', // two possible values: ltr, rtl
    layout: 'horizontal', // two possible values: vertical, horizontal
    sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: 'fixed', // two possible values: fixed, absolute
    headerpos: 'fixed', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin3', // seven possible values: skin(1/2/3/4/5/6/7)
    logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    // console.log('full component::'+localStorage.getItem('loginType'));
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard/classic"]);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
    if(this.options.dir == 'rtl'){
      this.document.body.classList.add("rtl");
    }
    
  }
  rtlToggle() {
    this.document.body.classList.toggle("rtl");
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: string) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
      case 'iconbar':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case 'full':
      case 'iconbar':
        this.options.sidebartype = 'mini-sidebar';
        break;

      case 'overlay':
        this.showMobileMenu = !this.showMobileMenu;
        break;

      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          this.options.sidebartype = 'full';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  handleClick(event: boolean) {
    this.showMobileMenu = event;
  }

}
