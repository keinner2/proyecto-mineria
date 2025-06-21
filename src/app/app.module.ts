import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridRegistrarComponent } from './website/pages/registrar/grid-registrar/grid-registrar.component';
import { RegistrarCompraComponent } from './website/pages/registrar/registrar-compra/registrar-compra.component';
import { GridBuscarComponent } from './website/components/grid-buscar/grid-buscar.component';
import { BuscarOrdenCompraComponent } from './website/pages/buscar/buscar-orden-compra/buscar-orden-compra.component';
import { ActualizarSalidaComponent } from './website/pages/actualizar/actualizar-salida/actualizar-salida.component';
import { ActualizarSubItemComponent } from './website/pages/actualizar/popup/actualizar-sub-item/actualizar-sub-item.component';
import { HomeComponent } from './website/pages/home/home.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { ActualizarLlegadaComponent } from './website/pages/actualizar/actualizar-llegada/actualizar-llegada.component';
import { ActualizarOrdenCompraComponent } from './website/pages/actualizar/actualizar-orden-compra/actualizar-orden-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    GridRegistrarComponent,
    RegistrarCompraComponent,
    GridBuscarComponent,
    BuscarOrdenCompraComponent,
    ActualizarSalidaComponent,
    ActualizarSubItemComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ActualizarLlegadaComponent,
    ActualizarOrdenCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
