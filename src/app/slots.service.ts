import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Slot, Proposal} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  constructor (private http: HttpClient) {}
 
  private slotsUrl = 'localhost:4200/api/slots';


  public data = [
    { 
      id: 11,
      user_id: 1,
      begin: "2020-02-10",
      proposals: [
        { id:2,
          userId: 1,
          name: "This is a kind of proposal"
        },
        { id:3,
          userId: 2,
          name: "This is a kind of proposal"
        },
        { id:4,
          userId: 3,
          name: "This is a kind of proposal"
        },
        { id:5,
          userId: 1,
          name: "This is a kind of proposal"
        },
      ]
    },
    { 
      id: 12,
      begin: "2020-03-10",
      user_id: 1,
      proposals: []
    },
    { 
      id: 14,
      begin: "2020-05-10",
      user_id: 1,
      proposals: []
    }
  ]
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  fetchSlots(): Observable<Slot[]> {
    // handle query
    return this.http.get<Slot[]>(
      this.slotsUrl, 
      this.httpOptions
    )
    .pipe(
      catchError(e => {
        // for now, return dummy data for mockup
        console.log(e);
        return of([
          {
            id: 11,
            user_id: 1,
            begin: new Date("2020-05-03"),
            duration: 40,
            proposals: <Proposal[]>[
              {
                title: "a proposal",
                details: "with some details",
                accepted: false,
                hosted_by: "martu",
                hosting_coop:"nayra",
                id: 2,
                user_id: 2
              },
              {
                title: "a better proposal",
                details: "with better details",
                accepted: true,
                hosted_by: "jose",
                hosting_coop:"nayra",
                id: 1,
                user: 1
              }
            ],
          },
          {
            id: 12,
            user_id: 1,
            begin: new Date("2020-05-13"),
            duration: 60,
            proposals: <Proposal[]>[
              {
                title: "a proposal",
                details: "with some details",
                accepted: false,
                hosted_by: "martu",
                hosting_coop:"nayra",
                id: 2,
                user_id: 1
              },
              {
                title: "a better proposal",
                details: "with better details",
                hosted_by: "naska",
                hosting_coop: "camplight",
                accepted: true,
                id: 1,
                user_id: 2
              }
            ]
          }
        ]);
      })
    )
    // .pipe(map()) to convert response 
  }

  createSlot(data: {date:string, duration: number}) {
    this.http.post(
      this.slotsUrl, 
      data, 
      this.httpOptions
    ).subscribe(res => {
      console.log(res)
    })
  }

  editSlot(id:number, data: { date:string, duration: number}) {
    const url = `${this.slotsUrl}/${id}`;
    
    this.http.put(
      url, 
      data, 
      this.httpOptions
    ).subscribe(res => {
      console.log(res)
    })
  }

  deleteSlot(id:number) {
    const url = `${this.slotsUrl}/${id}`;

    this.http.delete(
      url, 
      this.httpOptions
    ).subscribe(res => {
      console.log(res)
    })
  }
}
