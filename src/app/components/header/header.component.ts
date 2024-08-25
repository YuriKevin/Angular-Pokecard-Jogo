import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private lastScrollTop = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = this.el.nativeElement.querySelector('header');

    if (currentScrollTop > this.lastScrollTop) {
      this.renderer.addClass(navbar, 'hidden');
    } else {
      this.renderer.removeClass(navbar, 'hidden');
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
