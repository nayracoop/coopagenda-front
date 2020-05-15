import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAdmin = true;
  public id = 1;
  constructor() { }
}
