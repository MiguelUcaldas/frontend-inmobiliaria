import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-ver-inmueble',
  templateUrl: './ver-inmueble.component.html',
  styleUrls: ['./ver-inmueble.component.css']
})
export class VerInmueblerComponent {
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;
  ciudadId: number = 0;
  direccion: string = "";
  asesorId:number=0;
  tipoPropiedadId:number=0;
  precioVenta: number = 0;
  precioRenta: number = 0;
  foto: string = "";
  venta : boolean = false;
  renta : boolean = false;

  selectedOption: string = "";

  constructor(
    private servicio: InmuebleService,
    private router: Router,
    private route: ActivatedRoute
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
        this.asesorId = datos.asesorId!;
        this.ciudadId = datos.ciudadId!;
        this.direccion = datos.direccion!;
        this.precioVenta = datos.precioVenta!;
        this.precioRenta = datos.precioRenta!;
        this.foto = datos.foto!;
        this.venta = datos.venta!;
        this.renta = datos.renta!;
        this.tipoPropiedadId = datos.tipoPropiedadId!;


      },
      error: (err) => {
        alert("El registro no existe.")
      }
    })
  }
}
