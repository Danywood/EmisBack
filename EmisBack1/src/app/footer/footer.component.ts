import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Output() valueChange = new EventEmitter<boolean>();
  isMiddleVisible: boolean = false;

   onSubmit() {
    this.isMiddleVisible = !this.isMiddleVisible;
    this.valueChange.emit(this.isMiddleVisible);
  } 

}
