import { Component, Input } from '@angular/core';
import { TSlot } from '../data/entities';

@Component({
  selector: 'app-slot-list',
  templateUrl: './slotList.component.html',
  styleUrls: ['./slotList.component.css'],
})
export class SlotList {
  @Input()
  slots: TSlot[];
}
