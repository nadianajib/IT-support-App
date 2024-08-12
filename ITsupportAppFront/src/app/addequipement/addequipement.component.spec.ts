import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentAddComponent } from './addequipement.component';

describe('AddequipementComponent', () => {
  let component: EquipmentAddComponent;
  let fixture: ComponentFixture<EquipmentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentAddComponent]
    });
    fixture = TestBed.createComponent(EquipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
