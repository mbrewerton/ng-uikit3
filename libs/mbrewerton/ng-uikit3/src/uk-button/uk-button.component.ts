import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fColor, HasElementRef, Palette } from '../uk-core';

class ButtonBase implements HasElementRef {
  constructor(public elementRef: ElementRef) {}
}

const BUTTON_BASE: typeof ButtonBase = fColor(ButtonBase, 'button', 'default');

@Component({
  selector: 'button[uk-button], a[uk-button]',
  templateUrl: 'uk-button.html',
  styles: []
})
export class UkButtonComponent extends BUTTON_BASE implements OnInit {
  @Input() color: Palette;
  constructor(elementRef: ElementRef) {
    super(elementRef);

    elementRef.nativeElement.classList.add('uk-button');
  }

  ngOnInit() {}
}
