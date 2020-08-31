import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabComponent } from './tab.component';
import { TabTitleComponent } from './tabTitle.component';
import { TabContentComponent } from './tabContent.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TabComponent, TabTitleComponent, TabContentComponent ],
  exports:      [ TabComponent ]
})
export class TabModule { }
