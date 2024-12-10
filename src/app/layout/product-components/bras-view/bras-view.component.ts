import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { ZoomImageViewerComponent } from '../zoom-image-viewer/zoom-image-viewer.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../services/product-service/cart.service';
import { CartItem,Cart  } from '../../../model/cart';
import { Location  } from '@angular/common';
// import { title } from 'process';
declare var myPluginFunction: any; 
declare var $: any;
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
  cartItem: any;
  selectedImage: string;
  allImages: string[] = []; 
  slides = `assets/images/users/1.jpg`
  image1: string = 'assets/images/product/bras.webp';
  image2: string = 'assets/images/product/bras-02.webp';
  
  element: any;
  constructor(public router: Router,private cartService: CartService,private location: Location) {
    this.price = '799.00';
    this.subtitle = "Bras";
  }
  ngOnInit() {
    const navigationState = this.location.getState() as { cartItem: any };
    if (navigationState && navigationState.cartItem) {
      this.cartItem = navigationState.cartItem;
      this.selectedImage = this.cartItem.images;
      this.allImages = Object.values(this.cartItem.images);
    }
  }
  
  
  onZoomImage(coordinates: any) {
    this.coordinates = coordinates;
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
    function product_thumb1() {
      $('.product-dec-slider-1').slick({
        infinite: true,
        slidesToShow: 6,
        stageMargin: 5,
        slidesToScroll: 1
      });
    }
    product_thumb1();
    
  }

productArray = [
  {
    prodId:1,
    title:'{{prod.title}}',
    Image:'',
    qut: 1,
    color:[
      { name: 'sandybrown', value: 'sandybrown', bgColor: 'sandybrown' },
      { name: 'wheat', value: 'wheat', bgColor: 'wheat' },
      { name: 'Blue', value: 'blue', bgColor: 'blue' },
      { name: 'white', value: 'white', bgColor: 'white' },
      { name: 'black', value: 'black', bgColor: 'black' }
    ] ,
    selectedColor: 'sandybrown',
    size: [
      { name: '32A', value: '32A' },
      { name: '32B', value: '32B' },
      { name: '32C', value: '32C' },
      { name: '32D', value: '32D' },
      { name: '32DD', value: '32DD' }
    ],
     selectedSize: '32A'
  }
]

inc(prod){
if(prod.qut != 10){
  prod.qut +=1
}
}
dec(prod){
  if(prod.qut != 1){
    prod.qut -= 1
  }
}

onColorChange(prod: any, color: any) {
  prod.selectedColor = color.name;
}
onSizeChange(prod: any, size: any) {
  prod.selectedSize = size.name;
}
itemCart:any=[]
addCart(category){
  
}
/////////////////////////////
// getCartDetails:any[]=[];
getCartDetails() {
  console.log(this.cartItem.images)
  console.log(this.cartItem);
  return [this.cartItem];

}
    productView(){
        const localCart = localStorage.getItem('localcart');
        if (localCart !== null) {
            this.getCartDetails = JSON.parse(localCart);
            console.log(this.getCartDetails);
          }
    }
}
