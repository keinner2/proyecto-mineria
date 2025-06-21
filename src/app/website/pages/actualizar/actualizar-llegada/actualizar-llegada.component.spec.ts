import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLlegadaComponent } from './actualizar-llegada.component';

describe('ActualizarLlegadaComponent', () => {
  let component: ActualizarLlegadaComponent;
  let fixture: ComponentFixture<ActualizarLlegadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarLlegadaComponent]
    });
    fixture = TestBed.createComponent(ActualizarLlegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
