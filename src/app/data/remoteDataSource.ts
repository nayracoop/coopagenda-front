import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSourceImpl } from './dataSource';
import { TSlot, TSlotRes } from './entities';
import { environment } from '../../environments/environment';

const urls = {
  slots: `${environment.backendUrl}/api/slots`,
  proposals: `${environment.backendUrl}/api/proposals`,
};

@Injectable()
export class RemoteDataSource extends DataSourceImpl {
  constructor(private http: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  loadSlots(): Observable<TSlotRes> {
    return this.http.get<TSlotRes>(urls.slots, this.httpOptions);
  }

  storeSlot(slot: TSlot): Observable<number> {
    let slotsData = {
      data: slot,
    };
    return this.http
      .post<{ id: number }>(urls.slots, slotsData)
      .pipe<number>(map((val) => val.id));
  }
}
