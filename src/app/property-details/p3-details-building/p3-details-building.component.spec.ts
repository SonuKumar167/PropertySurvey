import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3DetailsBuildingComponent } from './p3-details-building.component';

describe('P3DetailsBuildingComponent', () => {
  let component: P3DetailsBuildingComponent;
  let fixture: ComponentFixture<P3DetailsBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3DetailsBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3DetailsBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
