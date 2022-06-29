import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  // Interpolation dans le template de nom :

  // Liaison du composant vers l'élément input avec []
  // Liaison de l'événement input, de l'élément vers le composant, avec ()
  // Affichage de la valeur avec l'interpolation {{ }}
  template: `
    <input [value]="nom" (input)="nom = $event.target.value" />
    {{ nom }}
  `,
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  nom: string;
  constructor() {
    this.nom = ``;
  }
}

@NgModule({
  imports: [BrowserModule],

  // Nous déclarons le composant :
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
