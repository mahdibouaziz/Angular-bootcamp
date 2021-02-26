import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'mahdi', 'bouaziz', 21, 'ok.png', 1111, 'student'),
      new Personne(2, 'mohamed', 'abdalah', 22, 'ok1.png', 2222, 'ok'),
      new Personne(3, 'mahdi', 'behy', 23, 'ok2.png', 3333, 'sent'),
    ];
    this.selectedPersonne = this.personnes[0];
  }

  sendElement(input): void {
    console.log(input);
    this.selectedPersonne = input;
  }
}
