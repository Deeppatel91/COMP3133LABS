import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new InputFormatDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
