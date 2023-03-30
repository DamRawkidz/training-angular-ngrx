import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {
  subjectEvent$ = new Subject();
  behaviorEvent$ = new BehaviorSubject(null);
  constructor() { }



}
