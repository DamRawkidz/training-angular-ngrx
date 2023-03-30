import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsComponentTwoComponent } from './rxjs-component-two.component';

describe('RxjsComponentTwoComponent', () => {
  let component: RxjsComponentTwoComponent;
  let fixture: ComponentFixture<RxjsComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
