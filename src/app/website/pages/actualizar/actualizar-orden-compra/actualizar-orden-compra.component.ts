import { Component, ViewChild, ViewChildren, ViewContainerRef, ComponentRef, QueryList, OnInit} from '@angular/core';
import { GridRegistrarComponent } from '../../registrar/grid-registrar/grid-registrar.component';

@Component({
  selector: 'app-actualizar-orden-compra',
  templateUrl: './actualizar-orden-compra.component.html',
  styleUrls: ['./actualizar-orden-compra.component.scss']
})
export class ActualizarOrdenCompraComponent {
  inputData = { codigo: '', descripcion: '', compania:'', contrato:'' }; 
    items: any[] = []; 
    currentItem: number = 1;
    
  
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    private dynamicComponents: ComponentRef<GridRegistrarComponent>[] = [];
  
  
    agregarDetalle(): void {
      const componentRef: ComponentRef<GridRegistrarComponent> = this.container.createComponent(GridRegistrarComponent);
      componentRef.instance.itemIndex = this.currentItem; // Pasar el valor del ítem
      this.currentItem++; // Incrementar el contador
      this.dynamicComponents.push(componentRef);
    }
  
    registrar() {
      const allTableData = this.dynamicComponents.map((componentRef) => {
        const tablaData=componentRef.instance.dataSource.data;
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
    }
    ngOnInit(): void {
    }
}
