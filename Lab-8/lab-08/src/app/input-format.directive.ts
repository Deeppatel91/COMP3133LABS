import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    // Set uppercase
    this.el.nativeElement.value = value.toUpperCase();

    // Apply styles
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.textTransform = 'uppercase';
  }
}
