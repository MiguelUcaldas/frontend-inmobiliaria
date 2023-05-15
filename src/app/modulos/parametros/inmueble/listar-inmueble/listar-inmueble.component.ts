import { Component } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent {
    listaRegistros: InmuebleModel[] = [];

    constructor(
      private servicioParametrizacion: ParametrosService
    ) {
    }

    ngOnInit() {
      this.servicioParametrizacion.listarRegistros().subscribe({
        next: (datos) => {
          this.listaRegistros = datos;
        },
        error: (err) => {

        }
      })
    }
}
