import { Component, OnInit, inject, TemplateRef, Input, Output, EventEmitter } from '@angular/core';// import { routerTransition } from '../../router.animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-bag-view',
    templateUrl: './bag-view.component.html',
    styleUrls: ['./bag-view.component.scss'],
    // animations: [routerTransition()]
})
export class BagviewComponent implements OnInit {
    @Input() prodExportArray: any[] = [];

    private offcanvasService = inject(NgbOffcanvas);
    filterProduct: any[] = [];
    constructor(config: NgbRatingConfig, private modalService: NgbModal) {
        this.filterProduct = this.prodExportArray;
    }

    ngOnInit() {
        this.filteredProducts = this.prodExportArray;
    }
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end' });
    }
    productArray: any = []
    tempArray: any = [];
    Array: any = [];
    newArray: any = [];


    // onBrandChange(event: any) {
    //     if (event.target.checked) {
    //         this.tempArray = this.Array.filter((e: any) => e.prodId == event.target.value)
    //         this.productArray = [];
    //         this.newArray.push(this.tempArray)
    //         for (let i = 0; i < this.newArray.length; i++) {
    //             var firstArray = this.newArray[i];
    //             for (let i = 0; i < firstArray.length; i++) {
    //                 var obj = firstArray[i];
    //                 this.prodExportArray.push(obj)
    //                 console.log(this.prodExportArray)
    //             }
    //         }
    //     } else {
    //         this.tempArray = this.Array.filter((e: any) => e.prodId != event.target.value)
    //         console.log(this.tempArray)
    //     }
    // }
    filteredProducts: any[] = [];       
    selectedBrands: string[] = [];   
    onBrandChange(event: any, brand: string) {
        if (event.target.checked) {
          this.selectedBrands.push(brand);
        } else {
          this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
        }
        this.filterProductsByBrand();
      }
      filterProductsByBrand() {
        if (this.selectedBrands.length === 0) {
          // If no brand is selected, show all products
          this.filteredProducts = this.prodExportArray;
        } else {
          this.filteredProducts = this.prodExportArray.filter(product => 
            this.selectedBrands.some(brand => product.title.includes(brand))
          );
        }
      }
      
      colors: string[] = ['Neutral Beige', 'wheat', 'Blue', 'white', 'black', 'Red', 'rosybrown', 'cyan', 'PURPLE'];
      isValidColor(color: string): boolean {
        const s = new Option().style;
        s.color = color;
        return s.color !== '';
      }
    
      get validColors(): string[] {
        return this.colors.filter(color => this.isValidColor(color));
      }
      brands = ['Blossom', 'Amante', 'Jokey', 'Enamor', 'Triumph', 'Soie'];
      // braSizes = [
      //   { size: '32', options: ['32A', '32B', '32C', '32D', '32DD', '32DDD'] },
      //   { size: '34', options: ['34A', '34B', '34C', '34D', '34DD', '34DDD'] },
      //   { size: '36', options: ['36A', '36B', '36C', '36D', '36DD', '36DDD'] },
      //   { size: '38', options: ['38A', '38B', '38C', '38D', '38DD', '38DDD'] }
      // ];
      bra_types = ['Non Padded Bras', 'Padded Bras', 'Non Wire Bras'];
      sizeS=['32','34','36','38'];
      selectedProduct: any = null;
      selectedFilters: any = {
        bra_types: [],
        sizes: [],
        collections: [],
        colors: []
      };
      onFilterChange(event: any, filterType: string, value: string) {
        if (event.target.checked) {
          this.selectedFilters[filterType].push(value);
        } else {
          const index = this.selectedFilters[filterType].indexOf(value);
          if (index > -1) {
            this.selectedFilters[filterType].splice(index, 1);
          }
        }
        this.updateItems();
      }
      updateItems() {
       
        this.filteredProducts = this.prodExportArray.filter(product => {
          return (
            this.selectedFilters.braSizes.length === 0 ||
            this.selectedFilters.braSizes.some(size => product.size.includes(size))
          ) && (
            this.selectedFilters.sizes.length === 0 ||
            this.selectedFilters.sizes.some(size => product.size.includes(size))
          ) && (
            this.selectedFilters.collections.length === 0 ||
            this.selectedFilters.collections.some(collection => product.collection.includes(collection))
          ) && (
            this.selectedFilters.colors.length === 0 ||
            this.selectedFilters.colors.some(color => product.color.includes(color))
          );
        });
      }
}
