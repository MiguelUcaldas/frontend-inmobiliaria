import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent {
  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;


  constructor(
    private fb : FormBuilder,
    private servicio: InmuebleService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    this.ConstruirFormularioArchivo();
  }

  ConstruirFormularioDatos() {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      precioVenta: ['', [Validators.required]],
      precioRenta: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
  }
  GuardarRegistro() {
    if (this.fGroup.invalid) {
      alert("Debe diligenciar todo el formulario, incluyendo la carga del archivo.");
    } else {
      let model = this.obtenerRegistro();
      this.servicio.AgregarRegistro(model).subscribe({
        next: (data: InmuebleModel) => {
          alert("Información almacenada correctamente");
          this.router.navigate(['/parametros/inmueble-listar']);
        },
        error: (err: any) => {
          alert("Ha ocurrido un error");
        }
      })
    }
  }
  obtenerRegistro(): InmuebleModel {
    let model = new InmuebleModel();
    model.direccion = this.obtenerFgDatos["direccion"].value;
    model.precioVenta = this.obtenerFgDatos["precioVenta"].value;
    model.precioRenta = this.obtenerFgDatos["precioRenta"].value;
    model.foto = this.obtenerFgDatos["foto"].value;
    return model;
  }
  get obtenerFgDatos() {
    return this.fGroup.controls;
  }


  /** Carga de archivo */

  ConstruirFormularioArchivo() {
    this.cargaArchivoFG = this.fb.group({
      archivo: ['', []]
    });
  }
  get obtenerFgArchivo() {
    return this.cargaArchivoFG.controls;
  }

  CargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.cargaArchivoFG.controls["archivo"].value);
    this.servicio.CargarArchivo(formData).subscribe({
      next: (data: ArchivoModel) => {
        console.log(data);
        this.nombreArchivoCargado = data.file;
        this.obtenerFgDatos["foto"].setValue(this.nombreArchivoCargado);
        this.archivoCargado = true;
        alert("Archivo cargado correctamente.");
      },
      error: (err: any) => {
        alert("Error cargando el archivo");
      }
    });
  }

  CuandoSeleccionaArchivo(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.obtenerFgArchivo["archivo"].setValue(f);
    }
  }
}
