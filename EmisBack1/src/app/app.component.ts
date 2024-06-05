import { Component } from '@angular/core';
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

  handleValueChange(isVisible: boolean) {
    console.log(this.isChildVisible);
    this.isChildVisible = isVisible;
  }

}
