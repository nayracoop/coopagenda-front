import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSourceImpl } from './dataSource';
import { TSlot } from './entities';

const urls = {
  slots: 'http://localhost:4000/api/slots',
  proposals: 'http://localhost:4000/api/proposals',
};

@Injectable()
export class RemoteDataSource extends DataSourceImpl {
  constructor(private http: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  loadSlots(): Observable<any> {
    return this.http.get(urls.slots, this.httpOptions);
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
