import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [];
  }

  getEmbauchees(): Personne[] {
    return this.personnes;
  }

  embaucher(personne): void {
    if (!this.personnes.includes(personne)) {
      this.personnes.push(personne);
    } else {
      alert(`${personne.name} est deja sélectionnée`);
    }
  }

  debaucher(personne): void {
    if (this.personnes.includes(personne)) {
      const index = this.personnes.indexOf(personne);
      this.personnes.splice(index, 1);
    }
  }
}
