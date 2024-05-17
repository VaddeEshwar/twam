import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-body-card',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
    console.log("starter component");
  }

  ngAfterViewInit() {}
}
