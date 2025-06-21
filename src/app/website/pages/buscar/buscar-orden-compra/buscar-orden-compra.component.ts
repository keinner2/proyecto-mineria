import { Component, OnInit, Predicate } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

//simulando una clase
export interface PeriodicElement {
  codigo: number;
  descripcion: string;
  disciplina: string;
  destino: string;
  compania: string;
  contrato: string;
}

const DATA1: PeriodicElement[] = [
  {codigo: 0, descripcion: 'ITEM0', disciplina: 'Disciplina buscar 0' ,destino: 'Arequipa', compania: 'Mineria arequipa sac' ,contrato: '1 año'},
  {codigo: 1, descripcion: 'ITEM1', disciplina: 'Disciplina buscar 1' ,destino: 'Lima', compania: 'Mineria Antapaccay sac' ,contrato: '8 meses'},
  {codigo: 2, descripcion: 'ITEM2', disciplina: 'Disciplina buscar 2' ,destino: 'Juliaca', compania: 'Mineria Apumayo sac' ,contrato: '16 meses'},
  {codigo: 3, descripcion: 'ITEM3', disciplina: 'Disciplina buscar 3' ,destino: 'Lambayeque', compania: 'Mineria Bateas sac' ,contrato: '3 años'},
  {codigo: 4, descripcion: 'ITEM4', disciplina: 'Disciplina buscar 4' ,destino: 'Puno', compania: 'Minas Buenaventura' ,contrato: '2 años'},
];

@Component({
  selector: 'app-buscar-orden-compra',
  templateUrl: './buscar-orden-compra.component.html',
  styleUrls: ['./buscar-orden-compra.component.scss']
})
export class BuscarOrdenCompraComponent implements OnInit {

  date=new FormControl('',[Validators.required]);
  dataSource = new MatTableDataSource(DATA1);;
  displayedColumns: string[] = ['codigo', 'descripcion', 'disciplina', 'destino', 'compania', 'contrato','actions'];

    ngOnInit() {
      // const data  = [
      //   { codigo: 0, descripcion: 'ITEM1', disciplina: 'Disciplina buscar 1', destino: 'Arequipa', compania: 'Mineria arequipa sac', contrato: '3 años'},
      //   {codigo: 1, descripcion: 'ITEM2', disciplina: 'Disciplina buscar 2', destino: 'Lima', compania: 'Minerales juliaca', contrato: '8 meses'}
      // ];
      // this.dataSource.data=data;
    }
    //datapicker
    campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
    
    //crear variable para guardar el valor del campo de busquedad
    searchValue: string = '';
    //metodo buscar
    applyFilter() {
      const filterValue = this.searchValue.trim(); // Obtener el valor del campo de búsqueda
    
      //campo está vacío
      if (filterValue === '') {
        console.warn('Por favor, ingrese un código para buscar.');
        this.dataSource.data = DATA1; // Resetear la tabla si el campo está vacío
        return
      }
      //convertir valor a número
      const codigoBuscado = Number(filterValue);
    
      // Validar que el valor ingresado sea un número válido
      if (isNaN(codigoBuscado)) {
        console.warn('Por favor, ingrese un número válido para buscar un código.');
        this.dataSource.data = DATA1; // Resetear la tabla si el valor no es válido
        return;
      }
    
      // Filtrar los datos por coincidencia exacta con el campo "codigo"
      const filteredData = DATA1.filter(item => item.codigo === codigoBuscado);
    
      if (filteredData.length === 0) {
        // Si no se encuentran coincidencias
        console.log(`El código ${codigoBuscado} no existe.`);
        this.dataSource.data = []; // vaciar la tabla si no existe codigo
      } else {
        // Actualizar la tabla con los datos filtrados
        this.dataSource.data = filteredData;
      }
    }


    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value.trim();
    //   if(!isNaN(Number(filterValue))){
    //     //filtrar codigo
    //     this.dataSource.filterPredicate=( data: PeriodicElement, filter: string)=>
    //       data.codigo==Number(filter);
    //     this.dataSource.filter=filterValue
    //   }else{
    //     console.warn('Ingrese un código válido para buscar.');
    //   }
    // }
}
/*agregar 3 campos
1. Codigo de Orden de Compra
2. Fecha Inicio
3. Fecha Fin*/


/* ACTUALIZAR COMPRA NO EDITABLE INPUT  CODIGO - CONTRATO 
   Actualizar Salida / Llegada SIN EDITAR EL FRONT - EN POPUP CAMPOS ITEM SIN EDITAR - SOLO GRID */
