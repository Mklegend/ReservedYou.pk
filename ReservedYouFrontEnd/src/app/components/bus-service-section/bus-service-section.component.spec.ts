import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServiceSectionComponent } from './bus-service-section.component';

describe('BusServiceSectionComponent', () => {
  let component: BusServiceSectionComponent;
  let fixture: ComponentFixture<BusServiceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusServiceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
