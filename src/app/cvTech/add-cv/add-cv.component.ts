import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  addPersonne(formulaire): void {
    console.log(formulaire);
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(['cv']);
  }
}
