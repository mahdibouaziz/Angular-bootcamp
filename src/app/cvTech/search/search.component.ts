import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: Personne[];
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(value: string): void {
    value = value.trim();
    if (value.length) {
      this.cvService.findByName(value).subscribe(
        (response) => {
          // console.log(response);
          this.searchResult = response;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.searchResult = [];
    }
  }
  /* afficher selected personne fel details */
  selectPersonne(personne: Personne): void {
    console.log(personne);
  }
}
