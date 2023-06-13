import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-indentificacion-usuario',
  templateUrl: './indentificacion-usuario.component.html',
  styleUrls: ['./indentificacion-usuario.component.css']
})

export class IndentificacionUsuarioComponent {

  fGroup: FormGroup = new FormGroup({});
  /* protected aFormGroup: FormGroup = new FormGroup({});
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component | undefined;
  @ViewChild('langInput') langInput: ElementRef | undefined;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = '	es-419';
  public type!: 'image' | 'audio'; */
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required,]],
      recaptcha: [null, [Validators.required,]]
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
          if(datos._id == undefined || datos._id == null){
            alert("Credenciales incorrectas o falta la validación del correo electrónico");
          } else {
            if (this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(datos)) {
            this.router.navigate(["/seguridad/verificar2-fa"]);
            if(datos.rolId == "64572a559f3c7b8f32cea0e9"){
              alert("ESTAS ENTRANDO AL SISTEMA COMO CLIENTE");
            }
            if(datos.rolId == "6420c4fa36e9b908405a0665"){
              alert("ESTAS ENTRANDO AL SISTEMA COMO ADMINISTRADOR");
            }
            if(datos.rolId == "6487f89b55f70e4c54925f6c"){
              alert("ESTAS ENTRANDO AL SISTEMA COMO ASESOR");
            }
            }
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
