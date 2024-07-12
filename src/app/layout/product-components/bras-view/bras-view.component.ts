import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import {ZoomImageViewerComponent} from '../zoom-image-viewer/zoom-image-viewer.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-bras-view',
    templateUrl: './bras-view.component.html',
    styleUrls: ['./bras-view.component.scss'],
    // animations: [routerTransition()]
})
export class BrasviewComponent implements OnInit {
    rewardImagePath: string = ' assets/images/rating/star-on.png';
    price: string;
    coordinates: any;
    active=1;
    selectedImage=`assets/images/gallery/1.jpg`
    slides = `assets/images/product/1.webp`
    constructor() {
        this.price = '799.00';
    }

    ngOnInit() {
        console.log("hello eshwar this component bras view");
      
    }
     
       onZoomImage(coordinates:any){
       console.log(coordinates);
       this.coordinates = coordinates
    }
      onThumClick(index:string){
        this.selectedImage=`assets/images/gallery/${index}.jpg`
      }
      onColorClick(index:string){
        this.slides=`assets/images/product/${index}.jpg`
       console.log(this.slides)
      }
      ratingcount=0;
      totalrating=0;
      Finalrating:any;
      disabled = false;
      ratingcontrol=new FormControl(0);
      GetRating(){
          this.ratingcount++;
          this.totalrating+=this.ratingcontrol?.value|| 0;
          this.Finalrating=(this.totalrating/this.ratingcount).toFixed(2)
      }
}
