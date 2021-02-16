import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeryRecipeListComponent } from './backery-recipe-list.component';

describe('BackeryRecipeListComponent', () => {
  let component: BackeryRecipeListComponent;
  let fixture: ComponentFixture<BackeryRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackeryRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeryRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
