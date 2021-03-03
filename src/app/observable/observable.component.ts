import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<any>;
  mesImages = ['ok.png', 'ok1.png', 'ok2.png'];
  currentImage: string;
  constructor() {}

  ngOnInit(): void {
    /* Notre observable + le flux de données */
    this.monObservable = new Observable((observer) => {
      let i = this.mesImages.length - 1;
      setInterval(() => {
        observer.next(this.mesImages[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.mesImages.length - 1;
        }
      }, 1500);
    });

    /* Notre observer */
    this.monObservable.subscribe((result) => {
      console.log(result);
      this.currentImage = result;
    });
  }
}
