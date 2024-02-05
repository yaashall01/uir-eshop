import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCategoryComponent } from './stock-category.component';

describe('StockCategoryComponent', () => {
  let component: StockCategoryComponent;
  let fixture: ComponentFixture<StockCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCategoryComponent]
    });
    fixture = TestBed.createComponent(StockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
