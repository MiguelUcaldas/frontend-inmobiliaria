import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-verificar2-fa',
  templateUrl: './verificar2-fa.component.html',
  styleUrls: ['./verificar2-fa.component.css']
})
export class Verificar2FAComponent {

  usuarioId: string = "";
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder,
    private router : Router
    ) { }

  ngOnInit() {
    let datos = this.servicioSeguridad.ObtenerDatosUsuariosLS();
    if (datos != null) {
      this.usuarioId = datos._id!;
      this.ConstruirFormulario();
    }else{
      this.router.navigate(['/seguridad/indentificar-usuario']);
    }
  }
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]]
    });
  }
/**
 * Validacion del 2fa
 */
  ValidarCodigo2fa() {
    if (this.fGroup.invalid) {
      alert("Debe ingresar el código");
    } else {
      let codigo2fa = this.ObtenerFormGroup["codigo"].value;
      this.servicioSeguridad.ValidarCodigo2FA(this.usuarioId, codigo2fa).subscribe({
        next: (datos: UsuarioValidadoModel) => {
          console.log(datos);
          if (datos.token != null && datos.token != undefined && datos.token != "") {
            console.log("ESTOY CREANDO EL MENU");
            this.servicioSeguridad.ConstruirMenuLateral(datos.menu);
            this.servicioSeguridad.AlmacenarDatosUsuarioValidado(datos);
            this.router.navigate([""]);
          } else {
            alert("El código no es válido");
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get ObtenerFormGroup() {
    return this.fGroup.controls;
  }

}
