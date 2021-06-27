import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goTo(): void {
        this.router.navigate(['/login']);
    }

}
