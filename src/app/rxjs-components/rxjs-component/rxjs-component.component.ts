import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/mock-api/mock-api.service';
import { RxjsServiceService } from '../rxjs-service.service';

@Component({
  selector: 'app-rxjs-component',
  templateUrl: './rxjs-component.component.html',
  styleUrls: ['./rxjs-component.component.scss']
})
export class RxjsComponentComponent implements OnInit,OnDestroy {
  counter: number = 0

  constructor(
    private rxjsSV: RxjsServiceService,
  ){
  }


  ngOnInit(): void {


  }


  addCounter(){
    this.counter ++
    this.rxjsSV.subjectEvent$.next(this.counter)
  }


  ngOnDestroy(): void {

  }


}
