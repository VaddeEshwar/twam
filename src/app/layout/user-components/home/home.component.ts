import { Component,OnInit, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
// import { routerTransition } from '../../router.animations';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddingComponent} from '../client-adding/client-adding.component';
import {Client } from '../../../model/products'
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
    image1: string = 'assets/images/product/bras.webp';
    image2: string = 'assets/images/product/bras-02.webp';

    constructor(private modalService: NgbModal) {
        this.subtitle="Bras";

    }

    ngOnInit() {
        console.log("Hello Eshwar this working please reslove header");
    }
     
    openModal() {
        const modalRef = this.modalService.open(ClientAddingComponent,{size: 'modal-xl'});
        modalRef.componentInstance.modalTitle = 'Left-to-Right Modal';
      }
}
