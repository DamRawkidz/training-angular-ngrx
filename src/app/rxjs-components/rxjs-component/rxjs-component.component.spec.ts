import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsComponentComponent } from './rxjs-component.component';

describe('RxjsComponentComponent', () => {
  let component: RxjsComponentComponent;
  let fixture: ComponentFixture<RxjsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
