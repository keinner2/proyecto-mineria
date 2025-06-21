import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRegistrarComponent } from './grid-registrar.component';

describe('GridRegistrarComponent', () => {
  let component: GridRegistrarComponent;
  let fixture: ComponentFixture<GridRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridRegistrarComponent]
    });
    fixture = TestBed.createComponent(GridRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
