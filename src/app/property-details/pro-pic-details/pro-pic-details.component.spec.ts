import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPicDetailsComponent } from './pro-pic-details.component';

describe('ProPicDetailsComponent', () => {
  let component: ProPicDetailsComponent;
  let fixture: ComponentFixture<ProPicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProPicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
