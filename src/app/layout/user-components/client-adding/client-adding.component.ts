import { Component, OnInit, ViewChild,Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
@Component({
    selector: 'app-client-adding',
    templateUrl: './client-adding.component.html',
    styleUrls: ['./client-adding.component.scss'],
    // animations: [routerTransition()]
})
export class ClientAddingComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  modalRef: BsModalRef;
  serverResponse: any;
  showBranchComponent = false;
  modalTitle: string;
  subtitle: string;
  price: string;
  @Input() image1: string;  
  constructor(private http: HttpClient,private router: Router,public activeModal: NgbActiveModal,private modalService: NgbModal) {
    
  }
  ngOnInit() {
console.log("price")
  }
  closeModal() {
    this.activeModal.close('Modal closed');
  }
}