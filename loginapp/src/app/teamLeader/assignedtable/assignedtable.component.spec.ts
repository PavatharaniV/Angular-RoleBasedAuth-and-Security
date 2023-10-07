import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtableComponent } from './assignedtable.component';

describe('AssignedtableComponent', () => {
  let component: AssignedtableComponent;
  let fixture: ComponentFixture<AssignedtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedtableComponent]
    });
    fixture = TestBed.createComponent(AssignedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
