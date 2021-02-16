import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeryRecipeComponent } from './backery-recipe.component';

describe('BackeryRecipeComponent', () => {
  let component: BackeryRecipeComponent;
  let fixture: ComponentFixture<BackeryRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackeryRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
