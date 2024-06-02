import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";

@Component({
    selector: 'app-item-list',
    standalone: true,
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.css',
    imports: [CardItemComponent]
})
export class ItemListComponent {

    public ciao: number = 3;

}
