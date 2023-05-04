import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndentificacionUsuarioComponent } from './indentificacion-usuario/indentificacion-usuario.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { Verificar2FAComponent } from './verificar2-fa/verificar2-fa.component';
import { CerrarSesionComponent} from './cerrar-sesion/cerrar-sesion.component';
import { RegistroPublicUsuariosComponent } from './registro-public-usuarios/registro-public-usuarios.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';

const routes: Routes = [
     {
      path:"identificacion-usuario",
      component: IndentificacionUsuarioComponent
    },
    {
      path:"cambiar-clave",
      component: CambiarClaveComponent
    },
    {
      path:"recuperar-clave",
      component: RecuperarClaveComponent
    },
    {
      path:"verificar2-fa",
      component: Verificar2FAComponent
    },
    {
      path:"cerrar-sesion",
      component: CerrarSesionComponent
    },
    {
      path:"registro-public",
      component: RegistroPublicUsuariosComponent
    },
    {
      path:"validad-hash-usuario-publico/:hash",
      component: ValidarHashUsuarioPublicoComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
