import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndentificacionUsuarioComponent } from './indentificacion-usuario/indentificacion-usuario.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { Verificar2FAComponent } from './verificar2-fa/verificar2-fa.component';
import { CerrarSesionComponent} from './cerrar-sesion/cerrar-sesion.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ConctactenosComponent } from './contactenos/contactenos.component';

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
      path:"registro-publico",
      component: RegistroPublicoUsuariosComponent
    },

    {
      path:"contactenos",
      component: ConctactenosComponent
    },

    {
      path:"validad-hash-usuario-publico/:hash",
      component: ValidarHashUsuarioPublicoComponent
    },
    {
      path:"usuario-crear",
      component:CrearUsuarioComponent
    },
    {
      path:"usuario-listar",
      component:ListarUsuarioComponent
    },
    {
      path:"usuario-editar/:id",
      component:EditarUsuarioComponent
    },
    {
      path:"usuario-eliminar",
      component:EliminarUsuarioComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
