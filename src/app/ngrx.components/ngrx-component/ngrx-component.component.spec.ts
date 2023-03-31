import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxComponentComponent } from './ngrx-component.component';

describe('NgrxComponentComponent', () => {
  let component: NgrxComponentComponent;
  let fixture: ComponentFixture<NgrxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
