import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServiceDashboardComponent } from './bus-service-dashboard.component';

describe('BusServiceDashboardComponent', () => {
  let component: BusServiceDashboardComponent;
  let fixture: ComponentFixture<BusServiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusServiceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
