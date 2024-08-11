import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddequipementComponent } from './addequipement.component';

describe('AddequipementComponent', () => {
  let component: AddequipementComponent;
  let fixture: ComponentFixture<AddequipementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddequipementComponent]
    });
    fixture = TestBed.createComponent(AddequipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
