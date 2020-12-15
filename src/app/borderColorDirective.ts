import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})

export class BorderColorDirective implements OnChanges {
  @Input('appCourseBorder')  public creation: number;

  constructor(private element: ElementRef) {
    this.creation = 0;
  }

  public ngOnChanges(): void {
    const current = Date.now();

    if (this.creation < current && this.creation >= (current - 1209600000)) {
      this.element.nativeElement.style.borderColor = 'green';
    }

    else if (this.creation > current ) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}


