import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBuscarComponent } from './grid-buscar.component';

describe('GridBuscarComponent', () => {
  let component: GridBuscarComponent;
  let fixture: ComponentFixture<GridBuscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridBuscarComponent]
    });
    fixture = TestBed.createComponent(GridBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
