import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css']
})
export class EliminarInmuebleComponent {

  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;
  direccion: string = "";
  precioVenta: number = 0;
  precioRenta: number = 0;
  foto: string = "";

  constructor(
    private servicio: InmuebleService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarRegistro();

  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: InmuebleModel) => {
        this.recordId = datos.id!;
        this.direccion = datos.direccion!;
        this.precioVenta = datos.precioVenta!;
        this.precioRenta = datos.precioRenta!;
        this.foto = datos.foto!;


      },
      error: (err) => {
        alert("El registro no existe.")
      }
    })
  }

  EliminarRegistro() {
    this.servicio.EliminarRegistro(this.recordId).subscribe({
      next: (data: any) => {
        alert("Información eliminada correctamente");
        this.router.navigate(['/parametros/inmueble-listar']);
      },
      error: (err: any) => {
        alert("Ha ocurrido un error");
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
