import { DatePipe } from '@angular/common';
import { Component , Input, Output, EventEmitter, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';



@Component({
  selector: 'app-grid-registrar',
  templateUrl: './grid-registrar.component.html',
  styleUrls: ['./grid-registrar.component.scss']
})
export class GridRegistrarComponent implements OnInit{

  date = new FormControl('',[Validators.required]);
  
  @Input() items: any[] = []; // Recibir los datos de la tabla
  @Input() itemIndex: number = 1; // Índice del ítem recibido del componente padre
  @Output() registrar = new EventEmitter<any[]>();


  inputGrid = { disciplina:'', destino:'' };
  displayedColumns: string[] = ['item', 'subitem', 'tipoMaterial', 'descMaterial', 'area', 'codItem', 'cantOrdenada', 'actions'];

  dataSource = new MatTableDataSource<any>([]);
  
  ngOnInit() {
    // Simula datos obtenidos (reemplázalo con los datos de tu backend o lógica real)
    const data  = [
      { item: this.itemIndex, subitem: 0, tipoMaterial: '', descMaterial: '', area: '', codItem: '', cantOrdenada: ''}
    ];

    // Asigna datos al dataSource
    this.dataSource.data = data;
  }
  
  //añadir una fila mas a la tabla
  addData(): void {
    const subItemValue = this.dataSource.data.length + 1 -1;
    const newRow = {
      ...this.inputGrid,
      item: this.itemIndex,
      subitem: subItemValue,
      tipoMaterial: '',
      descMaterial: '',
      area: '',
      codItem: '',
      cantOrdenada: ''
    };
    
    // Agregar la nueva fila a la tabla
    this.dataSource.data = [...this.dataSource.data, newRow];
  }

  showTable=true; // true la tabla se mostrara

   //eliminar una fila
    deleteRow(element: any): void {
    this.dataSource.data = this.dataSource.data.filter((row) => row !== element);
     // Recalcular los subitems de forma correlativa
    this.dataSource.data = this.dataSource.data.map((row, index) => ({
      ...row,
      subitem: index + 1 -1// Asigna subitem como índice + 1
    }));
  
    // Verificar si la tabla debe mostrarse
    if (this.dataSource.data.length === 0) {
      this.showTable = false;
    }
  }
  

    //eliminar toda la tabla
    deleteAllRows(): void {
      this.dataSource.data = [];
      this.showTable = false;
    }
}
