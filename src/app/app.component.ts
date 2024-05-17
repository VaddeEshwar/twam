import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Twam';
  loading$: Observable<boolean> = of(false);
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe();
    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      )
    )
    // ONLY runs on:
    // NavigationStart, NavigationEnd, NavigationCancel, NavigationError
    .subscribe();
  }

}
