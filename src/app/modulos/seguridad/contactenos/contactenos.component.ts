import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactenosUsuarioModel } from 'src/app/modelos/contactenos-usuario.model';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { LogicaNegocioService } from 'src/app/servicios/logica-negocio.service';
declare const M: any;

@Component({
  selector: 'app-conctactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ConctactenosComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioLogicaNegocio: LogicaNegocioService
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
