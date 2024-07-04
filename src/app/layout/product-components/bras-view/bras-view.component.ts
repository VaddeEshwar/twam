import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import {ZoomImageViewerComponent} from '../zoom-image-viewer/zoom-image-viewer.component';

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
    minValue: number = 100;
    maxValue: number = 400;
    selectedImage=`assets/images/gallery/1.jpg`
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
}
