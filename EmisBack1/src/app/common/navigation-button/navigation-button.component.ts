import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent implements OnInit {

  @Input() buttonName: String | undefined;

  ngOnInit(): void {
   
  }

}