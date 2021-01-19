import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3DetailsVacantComponent } from './p3-details-vacant.component';

describe('P3DetailsVacantComponent', () => {
  let component: P3DetailsVacantComponent;
  let fixture: ComponentFixture<P3DetailsVacantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3DetailsVacantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3DetailsVacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
