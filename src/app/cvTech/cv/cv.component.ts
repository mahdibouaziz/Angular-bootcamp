import { Component, Input, OnInit } from '@angular/core';
import { PremierService } from 'src/app/premier.service';
import { Personne } from '../../Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    // Notre Observateur
    this.cvService.getPersonnes().subscribe(
      (response) => {
        console.log('Response: ', response);
        this.personnes = response;
        this.selectedPersonne = this.personnes[0];
      },

      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  sendElement(input): void {
    this.selectedPersonne = input;
  }
}
