import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { AsesorModel } from 'src/app/modelos/asesor.model';
import { AsesorService } from 'src/app/servicios/parametros/asesor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent {
  BASE_URL: String = ConfiguracionRutasBackend.urlNegocio;
  recordId: number = 0;
  primerNombre: string = "";
  segundoNombre: string = "";
  primerApellido: string = "";
  segundoApellido: string = "";
  correo : string="";


  constructor(
    private servicio: AsesorService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.recordId = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.BuscarRegistro();

  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: AsesorModel) => {
        this.recordId = datos.id!;
        this.primerNombre=datos.primerNombre!;
        this.segundoNombre= datos.segundoNombre!;
        this.primerApellido=datos.primerApellido!;
        this.segundoApellido=datos.segundoApellido!;
        this.correo = datos.correo!;

      },
      error: (err) => {
        alert("El registro no existe.")
      }
    })
  }

  EliminarRegistro() {
    this.servicio.EliminarRegistro(this.recordId).subscribe({
      next: (data: any) => {
        alert("Información eliminada correctamente");
        this.router.navigate(['/parametros/asesor-listar']);
      },
      error: (err: any) => {
        alert("Ha ocurrido un error");
      }
    })
  }

  goBack() {
    this.location.back();
  }

}
