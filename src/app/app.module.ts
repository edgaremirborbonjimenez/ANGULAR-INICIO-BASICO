import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent} from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent, EmpleadoComponent
  ],
  imports: [
    BrowserModule,FormsModule //Importamos Forms Module para utilizar el ngModule para el Two way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
