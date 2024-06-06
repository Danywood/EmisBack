import { Component } from '@angular/core';
import { NavigationButtonComponent } from "../common/navigation-button/navigation-button.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css'],
    imports: [NavigationButtonComponent,NgFor]
})
export class NavigationBarComponent {

    public buttonNames: string[];
    public urlMap: Map<string, string>;

    constructor() {
        this.buttonNames = ["Home","Che Cazzo Facciamo","Chi Cazzo Siamo","Dove Cazzo Siamo"];
        this.urlMap = new Map([
            ["Home", "/home"],
            ["Che Cazzo Facciamo", "/che-cazzo-facciamo"],
            ["Chi Cazzo Siamo", "/chi-cazzo-siamo"],
            ["Dove Cazzo Siamo", "/dove-cazzo-siamo"]
        ]);
    }
}