import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSectionComponent } from './route-section.component';

describe('RouteSectionComponent', () => {
  let component: RouteSectionComponent;
  let fixture: ComponentFixture<RouteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
