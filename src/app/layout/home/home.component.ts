import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    subtitle: string;
    loginType;
    apiLoaded = false;
    videoId = 'ttYCyRFLklU';
    height = 250;
    width = 465;
    constructor() {
        this.loginType = localStorage.getItem('loginType');
        this.subtitle = this.loginType+' LOGIN';
    }

    ngOnInit() {
        console.log("dashboard");
        if (!this.apiLoaded) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            this.apiLoaded = true;
          }
    }
    coursesOpen(){
        
    }
    
}
