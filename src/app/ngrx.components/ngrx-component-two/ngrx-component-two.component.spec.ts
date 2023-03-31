import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxComponentTwoComponent } from './ngrx-component-two.component';

describe('NgrxComponentTwoComponent', () => {
  let component: NgrxComponentTwoComponent;
  let fixture: ComponentFixture<NgrxComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
