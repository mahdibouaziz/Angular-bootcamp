import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(1, 'mahdi', 'bouaziz', 21, 'ok.png', 1111, 'student'),
      new Personne(2, 'mohamed', 'abdalah', 22, 'ok1.png', 2222, 'ok'),
      new Personne(3, 'mahdi', 'behy', 23, 'ok2.png', 3333, 'sent'),
      new Personne(3, 'mahdi', 'behy', 23, '', 3333, 'sent'),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
