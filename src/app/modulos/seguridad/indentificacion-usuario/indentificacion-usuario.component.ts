import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router} from '@angular/router';

@Component({
  selector: 'app-indentificacion-usuario',
  templateUrl: './indentificacion-usuario.component.html',
  styleUrls: ['./indentificacion-usuario.component.css']
})
export class IndentificacionUsuarioComponent {

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router : Router
  ) {

  }
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required,]]
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert("Datos incompletos")
    } else {
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();
      this.servicioSeguridad.IdentificarUsuario(usuario, claveCifrada).subscribe({
        next: (datos: usuarioModel) => {
          console.log(datos)
          if(this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(datos)){
            this.router.navigate(["/seguridad/2fa"]);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}
