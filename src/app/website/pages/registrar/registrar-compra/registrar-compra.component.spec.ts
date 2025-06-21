import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCompraComponent } from './registrar-compra.component';

describe('RegistrarCompraComponent', () => {
  let component: RegistrarCompraComponent;
  let fixture: ComponentFixture<RegistrarCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCompraComponent]
    });
    fixture = TestBed.createComponent(RegistrarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
