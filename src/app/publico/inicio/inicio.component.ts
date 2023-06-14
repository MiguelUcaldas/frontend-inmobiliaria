import { Component } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listaRegistros: InmuebleModel[] = [];



  constructor(
    private servicio: InmuebleService,
    private servicioSeguridad: SeguridadService,
  ) {
  }
  sesionActiva: boolean = false;


  ngOnInit() {
    this.servicio.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {

      }
    })

    this.ValidarSesion();
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


