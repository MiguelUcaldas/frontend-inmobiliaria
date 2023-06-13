import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-venta-inmueble',
  templateUrl: './venta-inmueble.component.html',
  styleUrls: ['./venta-inmueble.component.css']
})
export class VentaInmuebleComponent {
  listaRegistros:InmuebleModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  BASE_URL :String = ConfiguracionRutasBackend.urlNegocio;
  constructor(
    private servicioInmueble: InmuebleService,
    private servicioSeguridad: SeguridadService
  ) {
  }
  sesionActiva: boolean = false;

  ngOnInit() {
    this.ListarRegistros();
    this.ValidarSesion();
  }

  ListarRegistros(){
    this.servicioInmueble.listarRegistrosPaginados(this.pag).subscribe({
      next: (datos) => {
        this.listaRegistros = datos.registros;
        this.total = datos.totalRegistros;
      },
      error: (err) => {
        alert("Error leyendo la informacion.")
      }
    })
  }
  ValidarSesion() {
    this.servicioSeguridad.ObtenerDatosSesion().subscribe({
      next : (datos: UsuarioValidadoModel)=>{
        if(datos.token != ""){
          this.sesionActiva = true;
        }else{
          this.sesionActiva = false;
        }
      },
      error:(err:any)=>{
      }
    })
  }

}
