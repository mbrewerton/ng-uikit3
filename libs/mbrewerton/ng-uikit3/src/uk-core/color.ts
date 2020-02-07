import { ElementRef } from '@angular/core';
import { Palette } from './palette';
import { fBuildClass } from './class-builder';

export interface CanColor {
  color: Palette;
}

export type Constructor<T> = new (...args) => T;

export interface HasElementRef {
  elementRef: ElementRef;
}

export function fColor<T extends Constructor<HasElementRef>>(baseClass: T, friendlyName: string, defaultColor?: Palette) {
  return class extends baseClass {
    _color: Palette;

    get color(): Palette {
      return this._color;
    }
    set color(color: Palette) {
      if (color !== this._color) {
        if (this._color) {
          this.elementRef.nativeElement.classList.remove(fBuildClass(friendlyName, this._color));
        }
        if (color) {
          this.elementRef.nativeElement.classList.add(fBuildClass(friendlyName, color));
        } else {
          this.elementRef.nativeElement.classList.add(fBuildClass(friendlyName, defaultColor));
        }

        this._color = color;
      }
    }

    constructor(...args) {
      super(...args);

      this.color = defaultColor;
    }
  };
}
