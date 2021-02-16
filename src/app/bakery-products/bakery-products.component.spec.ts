import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryProductsComponent } from './bakery-products.component';

describe('BakeryProductsComponent', () => {
  let component: BakeryProductsComponent;
  let fixture: ComponentFixture<BakeryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
