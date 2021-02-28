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
    this.personnes = this.cvService.getPersonnes();
    this.selectedPersonne = this.personnes[0];
  }

  sendElement(input): void {
    this.selectedPersonne = input;
  }
}
