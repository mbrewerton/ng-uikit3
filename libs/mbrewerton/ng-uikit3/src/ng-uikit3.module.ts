import { NgModule } from '@angular/core';
import {UkButtonComponent, UkButtonModule} from './uk-button';

const UK_MODULES = [
  UkButtonModule
];
const UK_COMPONENTS = [
  UkButtonComponent
];

@NgModule({
  imports: UK_MODULES,
  exports: UK_COMPONENTS
})
export class NgUikit3Module { }
