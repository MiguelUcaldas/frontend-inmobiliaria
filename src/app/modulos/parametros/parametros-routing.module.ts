import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { VerInmueblerComponent } from './inmueble/ver-inmueble/ver-inmueble.component';
import { SolicitudComponent } from './inmueble/solicitud/solicitud.component';
import { VentaInmuebleComponent } from './inmueble/venta-inmueble/venta-inmueble.component';
import { RentaInmuebleComponent } from './inmueble/renta-inmueble/renta-inmueble.component';
import { VerInmuebleRentaComponent } from './inmueble/ver-inmueble-renta/ver-inmueble-renta.component';
import { VerInmuebleVentaComponent } from './inmueble/ver-inmueble-venta/ver-inmueble-venta.component';
import { ListarAsesorComponent } from './asesor/listar-asesor/listar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:"inmueble-listar",
    component: ListarInmuebleComponent
  },
  {
    path:"asesor-listar",
    component: ListarAsesorComponent
  },
  {
    path:"asesor-eliminar",
    component: EliminarAsesorComponent
  },

  {
    path:"inmueble-crear",
    component: CrearInmuebleComponent
  },

  {
    path:"inmueble-eliminar/:id",
    component: EliminarInmuebleComponent
  },

  {
    path:"inmueble-editar/:id",
    component: EditarInmuebleComponent
  },
  {
    path:"cliente-listar",
    component: ListarClienteComponent
  },
  {
    path:"cliente-crear",
    component: CrearClienteComponent
  },
  {
    path:"cliente-eliminar/:id",
    component: EliminarClienteComponent
  },
  {
    path:"cliente-editar/:id",
    component: EditarClienteComponent
  },
  {
    path:"inmueble-listar-venta",
    component: VentaInmuebleComponent
  },
  {
    path:"inmueble-listar-renta",
    component: RentaInmuebleComponent
  },
  {
    path:"inmueble-ver/:id",
    component: VerInmueblerComponent
  },
  {
    path:"inmueble-venta-ver/:id",
    component: VerInmuebleVentaComponent
  },
  {
    path:"inmueble-renta-ver/:id",
    component: VerInmuebleRentaComponent
  },
  {
    path:"solicitud/:id",
    component: SolicitudComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
