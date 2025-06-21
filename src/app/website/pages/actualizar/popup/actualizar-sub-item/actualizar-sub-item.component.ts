import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-actualizar-sub-item',
  templateUrl: './actualizar-sub-item.component.html',
  styleUrls: ['./actualizar-sub-item.component.scss'],
})
export class ActualizarSubItemComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ActualizarSubItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
    
    dataSource = new MatTableDataSource<any>([]);
    displayedColumns: string[] = ['sitioEta', 'fechaRas', 'numeroDoc', 'numeroPaquete', 'matriculaCamion', 'cantidad', 'actions'];

  save() {
    // console.log("Datos guardados en el popup:");
    // console.log(this.data); 
    this.dialogRef.close(this.data);
     // Enviamos los datos actualizados al componente principal
  }

  cancel() {
    this.dialogRef.close(); // Cerramos sin enviar datos
  }
  ngOnInit() {
    const data  = [
      { sitioEta: '', fechaRas: '', numeroDoc: '', numeroPaquete: '', matriculaCamion: '', cantidad: '' }
    ];
    this.dataSource.data=data;
  }
  
  addData(): void {
    const newRow = {
      sitioEta:'',
      fechaRas: new Date(), 
      numeroDoc: '', 
      numeroPaquete: '', 
      matriculaCamion: '',
      cantidad: ''
    };
    
    // Agregar la nueva fila a la tabla
    this.dataSource.data = [...this.dataSource.data, newRow];
  }
}