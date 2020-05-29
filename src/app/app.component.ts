import { Component } from '@angular/core';
import { DataSource } from './data/dataSource';
import { TSlot } from './data/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dataSource: DataSource) {}
  title = 'Coopagenda';

  get slots(): TSlot[] {
    const slots = this.dataSource.getSlots('id');
    console.log(slots);
    return slots;
  }
}
