import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TSlot, TSlotRes } from './entities';

export type SlotProp = keyof TSlot;

export abstract class DataSourceImpl {
  abstract loadSlots(): Observable<TSlotRes>;
  abstract storeSlot(slot: TSlot): Observable<number>;
}

@Injectable()
export class DataSource {
  private _slots: TSlot[];
  public slot: TSlot;

  constructor(private impl: DataSourceImpl) {
    this._slots = [];
    this.getData();
  }

  getSlots(sortProp: SlotProp = 'id'): TSlot[] {
    return this.selectSlots(this._slots, sortProp);
  }

  // select may eventually accept dates filters
  protected selectSlots(slots: TSlot[], sortProp: SlotProp): TSlot[] {
    return slots.sort((s1, s2) =>
      s1[sortProp] < s2[sortProp] ? -1 : s1[sortProp] > s2[sortProp] ? 1 : 0
    );
  }

  protected getData(): void {
    this._slots = [];
    this.impl.loadSlots().subscribe(
      ({ data }) => {
        data.forEach((p) => {
          this._slots.push(p);
        });
      },
      (err) => console.log('HTTP Error', err),
    );
  }

  storeSlot(): Observable<number> {
    return this.impl.storeSlot(this.slot);
  }
}
