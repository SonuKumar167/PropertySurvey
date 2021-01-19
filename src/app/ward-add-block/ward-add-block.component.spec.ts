import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardAddBlockComponent } from './ward-add-block.component';

describe('WardAddBlockComponent', () => {
  let component: WardAddBlockComponent;
  let fixture: ComponentFixture<WardAddBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardAddBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardAddBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
