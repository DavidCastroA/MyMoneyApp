import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListaDeGastoComponent } from './components/gastos/lista-de-gasto/lista-de-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListaDeGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
