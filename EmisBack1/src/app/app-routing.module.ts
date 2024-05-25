/*
* File di configurazione per il routing delle pagine
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'; //parte in alto della pagina , conterrà navigation bar
import { MiddleComponent } from './middle/middle.component'; // parte centrale della pagina , conterrà 
import { FooterComponent } from './footer/footer.component'; // parte in fondo della pagina , conterrà 
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'middle', component: MiddleComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navigation-bar', component: NavigationBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }