import { Component } from '@angular/core';
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
    selector: 'app-middle',
    standalone: true,
    templateUrl: './middle.component.html',
    styleUrl: './middle.component.css',
    imports: [ItemListComponent]
})
export class MiddleComponent {

}
