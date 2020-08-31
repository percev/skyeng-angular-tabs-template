import { Component, Input } from '@angular/core';
import { ITab } from '../interfaces';

@Component({
  selector: 'tab',
  template: `
  <div class="tab" [class.tab_active]="active">
    <tab-title class="tab__title">
      {{ tab.title }}
    </tab-title>
    <tab-content class="tab__content" *ngIf="active">
      {{ tab.content }}
    </tab-content>
  <div>`,
  styles: [``]
})
export class TabComponent  {
  @Input() tab: ITab;
  @Input() active: boolean;
}
