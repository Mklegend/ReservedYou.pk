import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServiceFormComponent } from './bus-service-form.component';

describe('BusServiceFormComponent', () => {
  let component: BusServiceFormComponent;
  let fixture: ComponentFixture<BusServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusServiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
