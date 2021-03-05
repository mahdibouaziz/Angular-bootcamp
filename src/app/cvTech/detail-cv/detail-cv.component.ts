import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getPersonneById(+params.id).subscribe(
        (response) => {
          // console.log('respinse in details: ', response);
          this.personne = response;
        },
        (error) => {
          console.log('An error has benn occurs in detils');
        },
        () => {
          console.log('Details Cv Completed');
        }
      );
    });
  }

  deletePersonne(): void {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        // console.log('response in delete: ', response);
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log('error in delete: ', error);
      },
      () => {
        console.log('Delete Completed');
      }
    );
  }

  updatePersonne(): void {
    const link = ['cv/updateCv', this.personne.id];
    this.router.navigate(link);
  }
}
