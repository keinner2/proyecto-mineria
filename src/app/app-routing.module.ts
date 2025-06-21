import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCompraComponent } from './website/pages/registrar/registrar-compra/registrar-compra.component';
import { ActualizarSalidaComponent } from './website/pages/actualizar/actualizar-salida/actualizar-salida.component';
import { BuscarOrdenCompraComponent } from './website/pages/buscar/buscar-orden-compra/buscar-orden-compra.component';
import { HomeComponent } from './website/pages/home/home.component';
import { ActualizarLlegadaComponent } from './website/pages/actualizar/actualizar-llegada/actualizar-llegada.component';
import { ActualizarOrdenCompraComponent } from './website/pages/actualizar/actualizar-orden-compra/actualizar-orden-compra.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: 'auth/login',  //Redirección a la ruta específica por defecto
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'actualizaSalida',
    component: ActualizarSalidaComponent,
  },
  {
    path:'actualizaLlegada',
    component: ActualizarLlegadaComponent,
  },
  {
    path:'actualizaOrden',
    component: ActualizarOrdenCompraComponent,
  },
  {
    path:'registrarOrden',
    component: RegistrarCompraComponent,
  },
  {
    path:'buscarOrden',
    component: BuscarOrdenCompraComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
