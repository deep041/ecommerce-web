import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }

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

}
