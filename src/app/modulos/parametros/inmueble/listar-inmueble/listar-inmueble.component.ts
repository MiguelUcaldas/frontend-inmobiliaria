import { Component } from '@angular/core';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService} from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent {
  listaRegistros:InmuebleModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  BASE_URL :String = ConfiguracionRutasBackend.urlNegocio;

    constructor(
      private servicioInmueble: InmuebleService
    ) {
    }

    ngOnInit() {
      this.ListarRegistros();
    }

    ListarRegistros(){
      this.servicioInmueble.listarRegistrosPaginados(this.pag).subscribe({
        next: (datos) => {
          this.listaRegistros = datos.registros;
          this.total = datos.totalRegistros;
        },
        error: (err) => {
          alert("Error leyendo la informacion.")
        }
      })
    }
}
