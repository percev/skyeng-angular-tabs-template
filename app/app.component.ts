import { Component } from '@angular/core';
import { ITab } from './interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public tabs: ITab[] = [
    {
      title: 'fisrs tab',
      content: 'This is first tab'
    },
    {
      title: 'awesome tab',
      content: 'Beautiful!'
    }
  ];

  public activeTab: number = 0;

  public dec(): void {
    if (this.tabs.length === 0) {
      return;
    }
    if (this.activeTab === this.tabs.length - 1) {
      this.activeTab = 0;
    }
    this.tabs = this.tabs.slice(0, -1);

  }

  public inc(): void {
    this.tabs = [ ...this.tabs, ({ title: 'new tab', content: 'Content'}) ];
  }

  public setActive(index: number): void {
    if (this.activeTab !== index) {
      this.activeTab = index;
    }
  }

  public isActiveTab(index: number): boolean {
    return this.activeTab === index
  }
}
