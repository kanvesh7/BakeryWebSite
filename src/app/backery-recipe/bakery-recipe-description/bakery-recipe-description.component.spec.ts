import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryRecipeDescriptionComponent } from './bakery-recipe-description.component';

describe('BakeryRecipeDescriptionComponent', () => {
  let component: BakeryRecipeDescriptionComponent;
  let fixture: ComponentFixture<BakeryRecipeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryRecipeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryRecipeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
