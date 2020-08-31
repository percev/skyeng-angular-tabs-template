import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `<ng-content></ng-content>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TabContentComponent  {
  @Input() content: string;
}
