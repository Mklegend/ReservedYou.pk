import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServiceListComponent } from './bus-service-list.component';

describe('BusServiceListComponent', () => {
  let component: BusServiceListComponent;
  let fixture: ComponentFixture<BusServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
