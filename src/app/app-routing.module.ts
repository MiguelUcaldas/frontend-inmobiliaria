import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/manejo-errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { IndentificacionUsuarioComponent } from './modulos/seguridad/indentificacion-usuario/indentificacion-usuario.component';
import { CambiarClaveComponent } from './modulos/seguridad/cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './modulos/seguridad/recuperar-clave/recuperar-clave.component';
import { Verificar2FAComponent } from './modulos/seguridad/verificar2-fa/verificar2-fa.component';
import { CerrarSeccionComponent } from './modulos/seguridad/cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
    {
      path:"seguridad",
      loadChildren: () => import("./modulos/seguridad/seguridad.module").then(m => m.SeguridadModule)
    },
    {
      path:"parametros",
      loadChildren: () => import("./modulos/parametros/parametros.module").then(m => m.ParametrosModule)
    },
    {
      path:"ventao-alquiler",
      loadChildren: () => import("./modulos/ventao-alquiler/ventao-alquiler.module").then(m => m.VentaoAlquilerModule)
    },
    {
      path:"reportes",
      loadChildren: () => import("./modulos/reportes/reportes.module").then(m => m.ReportesModule)
    },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"inicio"
  },
  {
    path:"**",
    component: RutaNoEncontradaComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
