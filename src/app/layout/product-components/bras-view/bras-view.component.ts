import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ZoomImageViewerComponent } from '../zoom-image-viewer/zoom-image-viewer.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bras-view',
  templateUrl: './bras-view.component.html',
  styleUrls: ['./bras-view.component.scss'],
  // animations: [routerTransition()]
})
export class BrasviewComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  rewardImagePath: string = ' assets/images/rating/star-on.png';
  subtitle: string;
  price: string;
  coordinates: any;
  active = 1;

  selectedImage = `assets/images/gallery/1.jpg`
  slides = `assets/images/users/1.jpg`
  image1: string = 'assets/images/product/bras.webp';
  image2: string = 'assets/images/product/bras-02.webp';
  constructor(public router: Router) {
    this.price = '799.00';
    this.subtitle = "Bras";
  }
  ngOnInit() {
    console.log("hello eshwar this component bras view");
  }
  onZoomImage(coordinates: any) {
    console.log(coordinates);
    this.coordinates = coordinates
  }
  onThumClick(index: string) {
    this.selectedImage = `assets/images/gallery/${index}.jpg`
  }
  onColorClick(index: string) {
    this.selectedImage = `assets/images/users/${index}.jpg`
  }
  ratingcount = 0;
  totalrating = 0;
  Finalrating: any;
  disabled = false;
  ratingcontrol = new FormControl(0);
  GetRating() {
    this.ratingcount++;
    this.totalrating += this.ratingcontrol?.value || 0;
    this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2)
  }
  placeorder() {
    this.router.navigate(['product-components/userform']);
    alert("hello")
  }

}
