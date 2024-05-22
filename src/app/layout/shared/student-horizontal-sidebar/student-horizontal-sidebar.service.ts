import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from './student-horizontal-sidebar.metadata';
import { ROUTES } from './student-horizontal-menu-items';


@Injectable({
    providedIn: 'root'
})
export class StudentHorizontalSidebarService {

    public screenWidth: any;
    public collapseSidebar: boolean = false;
    public fullScreen: boolean = false;

    MENUITEMS: RouteInfo[] = ROUTES;

    items = new BehaviorSubject<RouteInfo[]>(this.MENUITEMS);

    constructor() {
    }
}
