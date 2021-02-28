import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PremierService {
  data = ['data1', 'data2', 'data3', 'data4'];

  constructor() {}
  logger(data: any): void {
    console.log(data);
    console.log(this.data);
  }

  addData(data: any): void {
    this.data.push(data);
  }
}
