import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarOrdenCompraComponent } from './buscar-orden-compra.component';

describe('BuscarOrdenCompraComponent', () => {
  let component: BuscarOrdenCompraComponent;
  let fixture: ComponentFixture<BuscarOrdenCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarOrdenCompraComponent]
    });
    fixture = TestBed.createComponent(BuscarOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
