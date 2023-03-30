import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';
import { RxjsServiceService } from '../rxjs-service.service';

@Component({
  selector: 'app-rxjs-component-two',
  templateUrl: './rxjs-component-two.component.html',
  styleUrls: ['./rxjs-component-two.component.scss']
})
export class RxjsComponentTwoComponent implements OnInit, OnDestroy {

  counter: number = 0
  counter$ = new Observable()
  subscription = new Subscription()
  private destroy$ = new Subject()

  constructor(
    private rxjsSV: RxjsServiceService
  ){

  }


  ngOnInit(): void {

    this.counter$ = this.rxjsSV.subjectEvent$.asObservable()

    this.subscription = this.rxjsSV.subjectEvent$.asObservable().pipe(
      tap(counter => this.counter = counter as number),
      takeUntil(this.destroy$)
    ).subscribe()

  }


  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe()
      }

      this.destroy$.next(true)
      this.destroy$.complete()
  }
}
