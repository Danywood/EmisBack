import { Component } from '@angular/core';
import { ItemListComponent } from "./item-list/item-list.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-middle',
    standalone: true,
    templateUrl: './middle.component.html',
    styleUrl: './middle.component.css',
    imports: [ItemListComponent,CommonModule]
})
export class MiddleComponent {

}
