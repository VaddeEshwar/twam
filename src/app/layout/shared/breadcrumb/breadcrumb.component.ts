import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  pageInfo: Data = Object.create(null);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(data => {
        const defaultTitle = document.title; 
        const dynamicTitle = data['title'] || 'Default Title';
        const fullTitle = dynamicTitle ? `${dynamicTitle} | ${defaultTitle}` : defaultTitle;
        this.titleService.setTitle(fullTitle); 
        this.pageInfo = data; 
      });
  }
  ngOnInit() { 
    console.log('Hello Eshwar Page Info:', this.pageInfo)
    
  }
  
}
