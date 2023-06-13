import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAsesorComponent } from './asesor/listar-asesor/listar-asesor.component';
import { VerInmueblerComponent } from './inmueble/ver-inmueble/ver-inmueble.component';
import { SolicitudComponent } from './inmueble/solicitud/solicitud.component';
import { VentaInmuebleComponent } from './inmueble/venta-inmueble/venta-inmueble.component';
import { RentaInmuebleComponent } from './inmueble/renta-inmueble/renta-inmueble.component';
import { VerInmuebleRentaComponent } from './inmueble/ver-inmueble-renta/ver-inmueble-renta.component';
import { VerInmuebleVentaComponent } from './inmueble/ver-inmueble-venta/ver-inmueble-venta.component';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    ListarAsesorComponent,
    VerInmueblerComponent,
    SolicitudComponent,
    VentaInmuebleComponent,
    RentaInmuebleComponent,
    VerInmuebleRentaComponent,
    VerInmuebleVentaComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
