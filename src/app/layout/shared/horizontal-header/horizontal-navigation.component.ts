import { Component, AfterViewInit, ViewChild, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HttpClientJsonpModule } from '@angular/common/http';
import {AuthGuard } from '../services/auth.guard'
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-horizontal-navigation',
  templateUrl: './horizontal-navigation.component.html'
})
export class HorizontalNavigationComponent implements AfterViewInit {
  validUser: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  public isCollapsed = false;
  public showMobileMenu = false;
  enteredSearchValue: string = '';
  cartItem: number = 0;
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/user1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];


  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'French',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Spanish',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

  constructor(private modalService: NgbModal, private translate: TranslateService, public router: Router,private authService: AuthGuard) {

    translate.setDefaultLang('en');

  }

  ngAfterViewInit() { }

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
    alert('hello')
  }



  cart() {
    this.router.navigate(['product-components/cart']);
  }
  bag() {
    this.router.navigate(['product-components/bag']);
  }
  @Output() searchTextchanger: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextCharged() {
    this.searchTextchanger.emit(this.enteredSearchValue);
    console.log(this.searchTextchanger)
  }

  //   searchText:string = '';
  //   onSearchTextCharged(searchValue: string){
  // this.searchText = searchValue;
  // console.log(this.searchText)
  //   }



  openEnd(content: any) {
    // Implement the method functionality here
    console.log('Clicked on dropdown toggle');
  }


  profile() {
    this.router.navigate(['product-components/profile']);
  }

  ngOnInit() {
    this.cartItemFun();
    this.CartDetails()
  }
  getCartDetails:any[]=[];
  cartItemFun() {
    const localCart = localStorage.getItem('localcart');
    if (localCart !== null) {
      const cartCount = JSON.parse(localCart);
      console.log(cartCount);
      this.cartItem=cartCount.length;
    }
  }
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  login() {
  
    this.router.navigate(['login']);
    // this.authService.login();
  }
  
  // logout(): void {
  //   this.authService.logout();
  // }
  CartDetails(){
    const localCart = localStorage.getItem('localcart');
    if (localCart !== null) {
        this.getCartDetails = JSON.parse(localCart);
        console.log(this.getCartDetails);
      }
}
logout() {
  localStorage.clear();
  this.validUser = false;
  window.location.href = '/home'
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'User Successfully logged out!',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
}
}
