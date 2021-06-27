import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
        // For dropdown
        jQuery(function () {
            jQuery('.dropdown-btn').hover(function () {
                jQuery('.dropdown').removeClass('doFadeOut');
                jQuery('.dropdown').addClass('doFadeIn');
            }, function () {
                let onDropdown = false;
                jQuery('.dropdown').hover(function () {
                    onDropdown = true;
                }, function () {
                    jQuery('.dropdown').removeClass('doFadeIn');
                    jQuery('.dropdown').addClass('doFadeOut');
                });
                setTimeout(() => {
                    if (!onDropdown) {
                        jQuery('.dropdown').removeClass('doFadeIn');
                        jQuery('.dropdown').addClass('doFadeOut');
                    }
                }, 100);

            });
        });
    }

    goTo(component: string): void {
       this.router.navigate(['/' + component]);
    }

}
