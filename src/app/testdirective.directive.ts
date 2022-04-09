import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = ""
   }

}