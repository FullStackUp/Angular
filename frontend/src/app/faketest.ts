//fichier app.ts
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor="let item of items; let i = index; trackBy: trackById">
      {{ i + 1 }} - {{ item.name }}
    </div>
  `
})
export class AppComponent {
  items: { name: string; id: number }[] = [
    { name: 'Paul', id: 1 },
    { name: 'Julie', id: 2 },
    { name: 'Jean', id: 3 }
  ];

  trackById(index: number, item: { name: string; id: number }) {
    return item.id;
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
/*Résultat :
1 - Paul
2 - Julie
3 - Jean