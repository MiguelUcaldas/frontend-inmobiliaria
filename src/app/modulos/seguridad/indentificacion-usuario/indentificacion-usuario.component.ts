import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-indentificacion-usuario',
  templateUrl: './indentificacion-usuario.component.html',
  styleUrls: ['./indentificacion-usuario.component.css']
})
export class IndentificacionUsuarioComponent {

  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ){

  }
  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required,]]
    });
  }

  IdentificarUsuario(){
    alert("Identificando.....")
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

}
