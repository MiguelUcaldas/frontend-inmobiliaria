import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      Nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required]],
      asunto:['',[Validators.required, Validators.minLength(2)]]

    });
  }

  /**
   * Función de envio
   */
  EnviarCorreo() {
    let campos = this.ObtenerFormGroup;
    let datos = {
      nombre: campos["Nombre"].value,
      correo: campos["Correo"].value,
      asuntos: campos["Asunto"].value
    }
    this.servicioSeguridad.EnvioCorreoContactenos(datos).subscribe({
      next: (respuesta:usuarioModel) => {
        alert("Envio correcto, pronto estaremos en contacto.")
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
