import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5HouseShopLevelComponent } from './p5-house-shop-level.component';

describe('P5HouseShopLevelComponent', () => {
  let component: P5HouseShopLevelComponent;
  let fixture: ComponentFixture<P5HouseShopLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5HouseShopLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P5HouseShopLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
