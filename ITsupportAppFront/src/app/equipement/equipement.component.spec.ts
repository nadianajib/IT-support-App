import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipementListComponent } from './equipement.component'; // Nom corrigé

describe('EquipementListComponent', () => {
  let component: EquipementListComponent;
  let fixture: ComponentFixture<EquipementListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementListComponent] // Nom corrigé
    });
    fixture = TestBed.createComponent(EquipementListComponent); // Nom corrigé
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
