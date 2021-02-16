import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryListComponent } from './bakery-list.component';

describe('BakeryListComponent', () => {
  let component: BakeryListComponent;
  let fixture: ComponentFixture<BakeryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
