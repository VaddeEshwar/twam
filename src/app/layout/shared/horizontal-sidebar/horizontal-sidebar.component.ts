import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInfo } from './horizontal-sidebar.metadata';
import { HorizontalSidebarService } from './horizontal-sidebar.service';


@Component({
  selector: 'app-horizontal-sidebar',
  templateUrl: './horizontal-sidebar.component.html'
})
export class HorizontalSidebarComponent {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  path = '';

  constructor(private menuServise: HorizontalSidebarService, private router: Router) {
    this.menuServise.items.subscribe(menuItems => {
      this.sidebarnavItems = menuItems;
  
      // Active menu 
      this.sidebarnavItems.forEach(menuItem => {
        menuItem.submenu.forEach(submenuItem => {
          if (submenuItem.path === this.router.url) {
            this.path = menuItem.title;
          }
        });
      });
      this.addExpandClass(this.path);
      console.log(this.sidebarnavItems);
    });
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = element;
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = element;
    } else {
      this.showSubMenu = element;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    alert("hello")
    console.log("Eshwar")
  }


}
