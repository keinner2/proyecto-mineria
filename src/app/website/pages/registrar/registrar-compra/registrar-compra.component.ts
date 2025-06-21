import { Component, ViewChild, ViewChildren, ViewContainerRef, ComponentRef, QueryList, OnInit} from '@angular/core';
import { GridRegistrarComponent } from '../grid-registrar/grid-registrar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registrar-compra',
  templateUrl: './registrar-compra.component.html',
  styleUrls: ['./registrar-compra.component.scss']
})
export class RegistrarCompraComponent implements OnInit {



  inputData = { codigo: '', descripcion: '', compania:'', contrato:'' }; 
  items: any[] = []; 
  currentItem: number = 1;
  

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  private dynamicComponents: ComponentRef<GridRegistrarComponent>[] = [];

  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {}

  agregarDetalle(): void {
    const componentRef: ComponentRef<GridRegistrarComponent> = this.container.createComponent(GridRegistrarComponent);
    componentRef.instance.itemIndex = this.currentItem; // Pasar el valor del ítem
    this.currentItem++; // Incrementar el contador
    this.dynamicComponents.push(componentRef);
  }

  registrar() {
    // 1. Recolectar los datos
    const allTableData = this.dynamicComponents.map((componentRef) => {
      const tablaData = componentRef.instance.dataSource.data;
      const disciplina = componentRef.instance.inputGrid.disciplina;
      const destino = componentRef.instance.inputGrid.destino;
      return {
        tablaData,
        disciplina,
        destino,
      };
    });

    console.log('Datos de las tablas dinámicas:', allTableData);
    console.log('Datos de los inputs:', this.inputData);

    // 2. Limpiar campos del formulario principal
    this.inputData = {
      codigo: '',
      descripcion: '',
      compania: '',
      contrato: '',
    };

    // 3. Destruir componentes hijos dinámicamente
    this.dynamicComponents.forEach((componentRef) => componentRef.destroy());
    this.dynamicComponents = [];

    // 4. Resetear el contador
    this.currentItem = 1;
    this.snackBar.open('¡Registro exitoso!', 'Cerrar', {
      duration: 3000, // 3 segundos
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  abrirConfirmacion() {
    const snackBarRef = this.snackBar.open(
      '¿Confirmar registro de la compra?',
      'Sí, registrar',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.registrar();
    });
  }

}
