import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MiddleComponent } from "./middle/middle.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, MiddleComponent, FooterComponent, CommonModule]
})
export class AppComponent {

  title = 'EmisBack';
  isChildVisible: boolean = false;

  @ViewChild('toggleMiddle') toggleMiddle!: ElementRef;


  handleValueChange(isVisible: boolean) {
    this.isChildVisible = isVisible;
    if (this.isChildVisible) {
      setTimeout(() => {
        this.scrollToElement();
      }, 0); // Usa setTimeout per assicurarti che l'elemento sia già visibile nel DOM
    }
  }

  scrollToElement() {
    this.toggleMiddle.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(this.isChildVisible);
  }

}