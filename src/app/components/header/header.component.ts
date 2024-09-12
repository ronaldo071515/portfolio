import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  isScrolled = false;

  constructor( private elementRef: ElementRef ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10; // Ajusta el umbral si es necesario
  }

}
