import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryEditComponent } from './bakery-edit.component';

describe('BakeryEditComponent', () => {
  let component: BakeryEditComponent;
  let fixture: ComponentFixture<BakeryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
