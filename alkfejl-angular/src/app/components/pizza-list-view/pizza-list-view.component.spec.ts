import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListViewComponent } from './pizza-list-view.component';

describe('PizzaListViewComponent', () => {
  let component: PizzaListViewComponent;
  let fixture: ComponentFixture<PizzaListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
