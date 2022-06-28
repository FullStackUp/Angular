import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  template: `<div>
    <header>
      <app-header></app-header>
    </header>
    <h2>Hello {{ name }}</h2>
    <hello></hello>
  </div>`,
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = `Angular`;
  }
}
