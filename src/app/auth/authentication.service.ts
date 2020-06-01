import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TUser } from '../data/entities';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<TUser>;
  public currentUser: Observable<TUser>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<TUser>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): TUser {
    return this.currentUserSubject.value;
  }

  login(user: TUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
