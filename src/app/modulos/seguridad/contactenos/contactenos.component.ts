import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactenosUsuarioModel } from 'src/app/modelos/contactenos-usuario.model';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-conctactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ConctactenosComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {
  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  /**
   * Construcción del envio con los controles
   */
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(2)]],
      tipoMensaje: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(2)]]

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
    this.servicioSeguridad.EnvioCorreoContactenos(datos).subscribe({
      next: (respuesta:contactenosUsuarioModel) => {
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
