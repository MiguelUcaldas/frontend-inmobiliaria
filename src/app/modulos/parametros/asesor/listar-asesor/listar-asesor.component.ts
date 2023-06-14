import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { AsesorModel } from 'src/app/modelos/asesor.model';
import { AsesorService } from 'src/app/servicios/parametros/asesor.service';
import { ClienteService } from 'src/app/servicios/parametros/cliente.service';

@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent {
  listaRegistros:AsesorModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private servicio: AsesorService
  ){

  }

  ngOnInit(){
    this.ListarRegistros();
  }

  ListarRegistros(){
    this.servicio.listarRegistros(this.pag).subscribe({
      next: (datos) => {
        console.log(datos)
        this.listaRegistros = datos.registros;
        this.total = datos.totalRegistros;
      },
      error: (err) => {
        alert("Error leyendo la información.")
      }
    });
  }

}
