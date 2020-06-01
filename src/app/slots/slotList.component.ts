import { Component } from '@angular/core';
import { DataSource } from '../data/dataSource';
import { TSlot } from '../data/entities';

@Component({
  templateUrl: './slotList.component.html',
  styleUrls: ['./slotList.component.css'],
})
export class SlotList {
  constructor(public dataSource: DataSource) {
  }
  title = 'Coopagenda';

  get slots(): TSlot[] {
    return this.dataSource.getSlots('id');
  }
}
