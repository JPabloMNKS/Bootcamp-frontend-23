import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FiltrosRopaComponent } from './filtros-ropa/filtros-ropa.component';
import { FiltrosElectronicaComponent } from './filtros-electronica/filtros-electronica.component';
import { FiltrosHogarComponent } from './filtros-hogar/filtros-hogar.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosRopaComponent,
    FiltrosElectronicaComponent,
    FiltrosHogarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
