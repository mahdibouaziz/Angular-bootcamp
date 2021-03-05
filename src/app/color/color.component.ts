import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  color = 'yellow';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params);
      this.color = params.maCouleur;
    });
  }

  processReq(input: any): void {
    alert(input);
  }

  goToCv(): void {
    this.router.navigate(['cv']);
  }
}
