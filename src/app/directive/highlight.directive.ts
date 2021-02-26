import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = 'blue';

  constructor() {}

  @HostListener('mouseenter') mouseenter(): void {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(): void {
    this.bg = 'blue';
  }
}
