import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrdenCompraComponent } from './actualizar-orden-compra.component';

describe('ActualizarOrdenCompraComponent', () => {
  let component: ActualizarOrdenCompraComponent;
  let fixture: ComponentFixture<ActualizarOrdenCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarOrdenCompraComponent]
    });
    fixture = TestBed.createComponent(ActualizarOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
