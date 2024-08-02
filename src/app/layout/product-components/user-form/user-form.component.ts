import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'multi-step-wizard-app',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})

export class UserformComponent implements OnInit {
    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.navigate(['/user-form/wizard'], { skipLocationChange: true });
    }

}