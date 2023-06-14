import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { LogicaNegocioService } from 'src/app/servicios/logica-negocio.service';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';
import { Location } from '@angular/common';
declare const M: any;

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  fGroup: FormGroup = new FormGroup({});
  recordId: number = 0;
  direccion: string = "";
  precioVenta: number = 0;
  precioRenta: number = 0;
  ciudadId: number = 0;
  asesorId: number = 0;
  venta: boolean = false;
  renta: boolean = false;

  constructor(
    private fb: FormBuilder,
    private servicioLogicaNegocio: LogicaNegocioService,
    private router: Router,
    private servicio: InmuebleService,
    private location: Location,
    private route: ActivatedRoute,

  ) {
    this.recordId = this.route.snapshot.params["id"];
  }
  ngOnInit() {
    this.BuscarRegistro();
    this.ConstruirFormulario();
    const materializeScript = document.createElement('script');
    materializeScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
    materializeScript.onload = () => {
      M.AutoInit();
    };
    document.body.appendChild(materializeScript);
    this.ConstruirFormulario();
  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: InmuebleModel) => {
        this.recordId = datos.id!;
        this.ciudadId = datos.ciudadId!;
        this.asesorId = datos.asesorId!;
        this.direccion = datos.direccion!;
        this.precioVenta = datos.precioVenta!;
        this.precioRenta = datos.precioRenta!;
        this.venta = datos.venta!;
        this.renta = datos.renta!;
      },
      error: (err) => {
        alert("El registro no existe.")
      }
    })
  }

  /**
   * Construcción del envio con los controles
   */
  ConstruirFormulario() {
    this.BuscarRegistro()
    this.fGroup = this.fb.group({
      recordId: ['', [Validators.required]],
      ciudadId: [''],
      direccion: [''],
      tipoSolicitud: [''],
      asesorId: [''],
      precioVenta: [''],
      precioRenta: [''],
      venta: [''],
      renta: [''],
      nombre:['', [Validators.required]],
      correo:['', [Validators.required]],
      celular:['', [Validators.required]]



    });
  }

  /**
   * Función de envio
   */
  EnviarCorreo() {
    let campos = this.ObtenerFormGroup;
    let datos = {
      propiedadId: this.recordId.toString(),
      tipoSolicitud: campos["tipoSolicitud"].value,
      nombreCompleto: campos["nombre"].value,
      correo: campos["correo"].value,
      celular: campos["celular"].value,

    }
    console.log(datos);
    this.servicioLogicaNegocio.EnvioCorreoSolicitud(datos).subscribe({
      next: (respuesta: boolean) => {
        this.router.navigate(["/inicio"]);
        alert("Envío correcto, pronto estaremos en contacto.")
      },
      error: (err) => {
        alert("No se ha podido enviar el correo con la solicitud.")
      }
    });
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

  goBack() {
    this.location.back();
  }

}
