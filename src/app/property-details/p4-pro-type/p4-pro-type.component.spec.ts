import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4ProTypeComponent } from './p4-pro-type.component';

describe('P4ProTypeComponent', () => {
  let component: P4ProTypeComponent;
  let fixture: ComponentFixture<P4ProTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4ProTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P4ProTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
