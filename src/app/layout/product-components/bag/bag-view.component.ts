import { Component, OnInit, inject, TemplateRef, Input, } from '@angular/core';// import { routerTransition } from '../../router.animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../../user-components/client-adding/client-adding.component';
@Component({
    selector: 'app-bag-view',
    templateUrl: './bag-view.component.html',
    styleUrls: ['./bag-view.component.scss'],
    // animations: [routerTransition()]
})
export class BagviewComponent implements OnInit {
    @Input() prodExportArray:any[]=[];
    selectedBrands: string[] = [];
    
    filteredProducts = [this.prodExportArray];
    private offcanvasService = inject(NgbOffcanvas);
    filterProduct: any[] = [];
    constructor(config: NgbRatingConfig, private modalService: NgbModal) {
        this.filterProduct = this.prodExportArray;
    }
  
    ngOnInit() {
      
    }
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end' });
    }
     
   
    onBrandChange(event: any, brand: string) {
        if (event.target.checked) {
          this.selectedBrands.push(brand);
        } else {
          this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
        }
        console.log("Selected Brands:", this.selectedBrands); 
        this.filterProducts();
      }
      filterProducts() {
        console.log("Selected Brands:", this.selectedBrands);
        if (this.selectedBrands.length > 0) {
          this.filteredProducts = this.prodExportArray.filter(product =>
            this.selectedBrands.some(b => b.toLowerCase() === product.brand.toLowerCase()) // Using some for direct comparison
          );
          console.log("Filtered Products:", this.filteredProducts);
        } else {
          this.filteredProducts = [...this.prodExportArray];
          console.log("All Products:", this.filteredProducts);
        }
      }
      
   
}
