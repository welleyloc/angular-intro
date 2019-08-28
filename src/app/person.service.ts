import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './people';
import { Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of (PEOPLE).pipe(delay(4000))
  }
   
}