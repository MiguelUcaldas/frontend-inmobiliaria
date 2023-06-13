import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicaNegocioService } from 'src/app/servicios/logica-negocio.service';
declare const M: any;

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioLogicaNegocio: LogicaNegocioService,
    private router : Router
  ) {
  }
  ngOnInit() {
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

  /**
   * Construcción del envio con los controles
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      tipoMensaje: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]

    });
  }

  /**
   * Función de envio
   */
  EnviarCorreo() {
    let campos = this.ObtenerFormGroup;
    let datos = {
      nombreCompleto: campos["nombreCompleto"].value,
      tipoMensaje: campos["tipoMensaje"].value,
      correo: campos["correo"].value,
      celular: campos["celular"].value,
      mensaje: campos["mensaje"].value
    }
    console.log(datos);
    this.servicioLogicaNegocio.EnvioCorreoContactenos(datos).subscribe({
      next: (respuesta:boolean) => {
        this.router.navigate(["/inicio"]);
        alert("Envío correcto, pronto estaremos en contacto.")
      },
      error: (err) => {
        alert("No se ha podido enviar el correo.")
      }
    });
  }

  get ObtenerFormGroup(){
    return this.fGroup.controls;
  }
}
