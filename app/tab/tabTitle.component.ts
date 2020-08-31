import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-title',
  template: `<ng-content></ng-content>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TabTitleComponent  {
  @Input() title: string;
}
