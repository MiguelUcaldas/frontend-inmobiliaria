import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-verificar2-fa',
  templateUrl: './verificar2-fa.component.html',
  styleUrls: ['./verificar2-fa.component.css']
})
export class Verificar2FAComponent {

  usuarioId: string = "";
  fGroup: FormGroup = new FormGroup({});

  constructor(private servicioSeguridad: SeguridadService, private fb: FormBuilder) { }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuariosLS();
    if (datos != null) {
      this.usuarioId = datos._id!;
      this.ConstruirFormulario();
    }
  }
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    });
  }

  ValidarCodigo2fa() {
    if (this.fGroup.invalid) {
      alert("Debe ingresar el codigo");
    } else {
      let codigo2fa = this.ObtenerFormGroup["codigo"].value;
      this.servicioSeguridad.ValidarCodigo2FA(this.usuarioId, codigo2fa).subscribe({
        next: (datos: object) => {
          console.log(datos)
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}
