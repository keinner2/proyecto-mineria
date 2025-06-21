import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSubItemComponent } from './actualizar-sub-item.component';

describe('ActualizarSubItemComponent', () => {
  let component: ActualizarSubItemComponent;
  let fixture: ComponentFixture<ActualizarSubItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarSubItemComponent]
    });
    fixture = TestBed.createComponent(ActualizarSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
