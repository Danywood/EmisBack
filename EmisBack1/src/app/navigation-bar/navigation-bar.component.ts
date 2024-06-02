import { Component } from '@angular/core';
import { NavigationButtonComponent } from "../common/navigation-button/navigation-button.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.css',
    imports: [NavigationButtonComponent,NgFor]
})
export class NavigationBarComponent {

    public buttonNames: String[];

    constructor() {
        this.buttonNames = ["Home","Che Cazzo Facciamo","Chi Cazzo Siamo","Dove Cazzo Siamo"];
    }
}
