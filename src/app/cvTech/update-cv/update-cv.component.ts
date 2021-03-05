import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css'],
})
export class UpdateCvComponent implements OnInit {
  personne: Personne;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.cvService.getPersonneById(+params.id).subscribe(
        (response) => {
          console.log(response);
          this.personne = response;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('completed');
        }
      )
    );
  }

  updatePersonne(personne: Personne): void {
    this.cvService.updateCvPersonne(this.personne).subscribe(
      (response) => {
        // console.log(response);
        this.personne = response;
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
