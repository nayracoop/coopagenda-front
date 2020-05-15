import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {
  public data = [
    { 
      id: 11,
      date: "2020-02-10",
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
      date: "2020-03-10",
      proposals: []
    },
    { 
      id: 14,
      date: "2020-05-10",
      proposals: []
    }
  ]

  constructor() { }
}
