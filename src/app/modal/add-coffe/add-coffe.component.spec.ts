import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffeComponent } from './add-coffe.component';

describe('AddCoffeComponent', () => {
  let component: AddCoffeComponent;
  let fixture: ComponentFixture<AddCoffeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoffeComponent]
    });
    fixture = TestBed.createComponent(AddCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
