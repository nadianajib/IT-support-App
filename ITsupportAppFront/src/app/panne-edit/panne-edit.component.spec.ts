import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneEditComponent } from './panne-edit.component';

describe('PanneEditComponent', () => {
  let component: PanneEditComponent;
  let fixture: ComponentFixture<PanneEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanneEditComponent]
    });
    fixture = TestBed.createComponent(PanneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
