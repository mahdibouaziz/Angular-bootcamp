import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-cv2',
  templateUrl: './cv2.component.html',
  styleUrls: ['./cv2.component.css'],
})
export class Cv2Component implements OnInit {
  personnes: Personne[];
  clickedPersonne: Personne;

  constructor() {
    this.personnes = [
      new Personne(1, 'Salma', 'Borcheni', 20, 'ok.png', 1111, 'student'),
      new Personne(2, 'roudaina', 'rou', 19, 'ok1.png', 2222, 'stage'),
      new Personne(3, 'Hodhod', 'BesBes', 21, 'ok2.png', 3333, 'student'),
    ];
    this.clickedPersonne = this.personnes[0];
  }

  ngOnInit(): void {
    /* console.log(this.personnes); */
  }
  grabedPersonne(personne): void {
    this.clickedPersonne = personne;
  }
}
