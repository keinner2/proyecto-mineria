import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarSubItemComponent } from '../popup/actualizar-sub-item/actualizar-sub-item.component';
import { MatTableDataSource } from '@angular/material/table';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-actualizar-llegada',
  templateUrl: './actualizar-llegada.component.html',
  styleUrls: ['./actualizar-llegada.component.scss']
})
export class ActualizarLlegadaComponent implements OnInit{
constructor(private dialog: MatDialog) {}
  date = new FormControl('', [Validators.required]);
  dataSource = new MatTableDataSource<any>([]);

  //Datos de los inputs
  inputData = {
    codigo: '1', descripcion: 'BBBB', disciplina: 'CCCC', compania: 'DDD', destino: 'EEE', contrato: 'FFF' }; 

  displayedColumns: string[] = [
    'item',
    'subitem',
    'tipoMaterial',
    'descMaterial',
    'area',
    'codItem',
    'cantOrdenada',
    'cantRecibida',
    'cantSaldo',
    'actions',
  ];

  ngOnInit() {
    const data = [
      {
        item: 0,
        subitem: 'ITEM1',
        tipoMaterial: 'BBBB',
        descMaterial: 'BBBB',
        area: 'BBBB',
        codItem: 'BBB',
        cantOrdenada: 'BBB',
        cantRecibida: 'BBB',
        cantSaldo: 'BBBB'
      },
    ];
    this.dataSource.data = data;
  }

  openDialog(element: any) {
    console.log('Datos antes de abrir el diálogo:');
    console.log('Datos de las tablas: ', this.dataSource.data);
    console.log('Datos de los inputs: ', this.inputData);
    const dialogRef = this.dialog.open(ActualizarSubItemComponent, {
      width: '70%',
      height: 'auto',
      data: { ...this.inputData, ...element }, // Pasamos una copia de los datos
    });

    // Escuchamos el cierre del diálogo
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Datos recibidos del popup:');
        console.log(result);
        // los datos de los inputs
        const updatedInputs = {
          codigo: result.codigo || this.inputData.codigo,
          descripcion: result.descripcion || this.inputData.descripcion,
          disciplina: result.disciplina || this.inputData.disciplina,
          compania: result.compania || this.inputData.compania,
          destino: result.destino || this.inputData.destino,
          contrato: result.contrato || this.inputData.contrato,
        };
        // Separar los datos de la tabla
        const updatedTableRow = {
          item: result.item,
          subitem: result.subitem,
          tipoMaterial: result.tipoMaterial,
          descMaterial: result.descMaterial,
          area: result.area,
          codItem: result.codItem,
          cantOrdenada: result.cantOrdenada,
          cantRecibida: result.cantRecibida,
          cantSaldo: result.cantSaldo,
          sitioEta: result.sitioEta,
          fechaRas: result.fechaRas,
          numeroDoc: result.numeroDoc,
          matriculaCamion: result.matriculaCamion,
        };
        // Actualizar los datos de inputData
        this.inputData = updatedInputs;

        // Actualiza el elemento específico dentro de la tabla
        const index = this.dataSource.data.findIndex((el) => el.item === element.item);
        if (index !== -1) {
          this.dataSource.data[index] = {
            ...this.dataSource.data[index],
            ...result,
          }; // Actualizamos el elemento en el array
          
          this.dataSource.data = [...this.dataSource.data]; // Refrescamos el DataSource
        }
        console.log("Datos actualizados en los inputs:", updatedInputs);
        console.log("Datos actualizados en la tabla:", updatedTableRow);
      }
    });
  }
}
