import { Component, OnInit, inject, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent } from '../client-adding/client-adding.component';
import { Product } from '../../../model/products'
import { FormControl } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { shoppning} from '../../../model/shopping-add'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    modalRef: BsModalRef;
    subtitle: string;
    apiLoaded = false;
    price: string;
    oldprice:string;
    image1: string = 'assets/images/product/bras.webp';
    image2: string = 'assets/images/product/bras-02.webp';
    shoppningModel:shoppning;    
    shoppningForm:shoppning;
    private offcanvasService = inject(NgbOffcanvas);
    constructor(private modalService: NgbModal,public router: Router) {
        this.subtitle = "Triaction Hybrid Lite P-BLACK";
        this.price = '799.00';
        this.oldprice='659.00'
        this.shoppningForm = new shoppning();
        this.shoppningModel = new shoppning();
    }

    ngOnInit() {
        console.log("Hello Eshwar this working please reslove header");
    }

    openModal() {
        const modalRef = this.modalService.open(ClientAddingComponent, { windowClass: 'modal-xl modal-rounded' });
        modalRef.componentInstance.modalTitle = 'Left-to-Right Modal';
        modalRef.componentInstance.subtitle = this.subtitle;
        modalRef.componentInstance.price = this.price;
        modalRef.componentInstance.image = this.image1;
    }
    ratingcount = 0;
    totalrating = 0;
    Finalrating: any;
    ratingcontrol = new FormControl(0);
    GetRating() {
        this.ratingcount++;
        this.totalrating += this.ratingcontrol?.value || 0;
        this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2)
    }
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end' });
    }

    // modal Open Vertically Centered
    modalOpenVC(modalCenter: any) {
        this.modalService.open(modalCenter, {
            centered: true,
        });
    }
    onSubmit( modalCenter: any): void {
        const fromData = this.shoppningModel.form.value;
        alert("hello")
        console.log('datatat::eshwar' + JSON.stringify(fromData));
        this.router.navigate(['product-components/cart'], { queryParams: fromData });
        this.modalService.open(modalCenter, {
            centered: true,
        });
      }
}
