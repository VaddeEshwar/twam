import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ZoomImageViewerComponent } from '../zoom-image-viewer/zoom-image-viewer.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var myPluginFunction: any; 
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
  productquantity = 0;
  imageIndex: number = 1;

  selectedImage: string = ``;
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
    this.selectedImage = `assets/images/gallery/${index}.webp`
  }
  onColorClick(imageIndex: string) {
    this.selectedImage = `assets/images/gallery/${imageIndex}.webp`
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
    this.router.navigate(['product-components/cart']);

  }
  getImageUrl(): string {
    return `assets/images/gallery/${this.imageIndex}.webp`;
  }
  changeQuantity(action: 'max' | 'min') {
    if (action === 'max') {
      this.productquantity += 1;
    } else if (action === 'min') {
      if (this.productquantity > 0) {
        this.productquantity -= 1;
      }
    }
  }

  /////////////////////////////////////
   ngAfterViewInit(): void {
    // Call the function from plugins.js
    if (typeof myPluginFunction === 'function') {
      myPluginFunction();
    }
  }
}
