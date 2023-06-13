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
import { ListarAsesorComponent } from './asesor/listar-asesor/listar-asesor.component';
import { VerInmueblerComponent } from './inmueble/ver-inmueble/ver-inmueble.component';
import { SolicitudComponent } from './inmueble/solicitud/solicitud.component';

const routes: Routes = [
  {
    path:"inmueble-listar",
    component: ListarInmuebleComponent
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
    path:"asesor-listar",
    component: ListarAsesorComponent
  },
  {
    path:"inmueble-listar-Venta",
    component: ListarInmuebleComponent
  },
  {
    path:"inmueble-listar-Alquiler",
    component: ListarInmuebleComponent
  },
  {
    path:"inmueble-ver/:id",
    component: VerInmueblerComponent
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
