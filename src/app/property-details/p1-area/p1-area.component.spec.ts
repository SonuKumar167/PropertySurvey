import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1AreaComponent } from './p1-area.component';

describe('P1AreaComponent', () => {
  let component: P1AreaComponent;
  let fixture: ComponentFixture<P1AreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P1AreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P1AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
