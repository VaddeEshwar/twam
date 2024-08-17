import { Component, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-zoom-image-viewer',
  templateUrl: './zoom-image-viewer.component.html',
  styleUrls: ['./zoom-image-viewer.component.scss']
})
export class ZoomImageViewerComponent {
   @ViewChild('zoomImage', { static: true }) zoomImage!: ElementRef;

     constructor(private renderer: Renderer2) { }
     @Input('coordinates') set setCoordinates(coordinate: any) {
    if (coordinate) {
      const { x, y } = coordinate; 
      this.renderer.setStyle(this.zoomImage.nativeElement, 'backgroundPosition', `${x}% ${y}%`);
    }
  }
  @Input('imageUrl') set setImageUrl(url: any) {
    if (url) {
      this.renderer.setStyle(this.zoomImage.nativeElement, 'backgroundImage', `url(${url})`);
    }
  }
    
}



