import { Component } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ParametrosService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent {
    listaRegistros: InmuebleModel[] = [];

    constructor(
      private servicioInmueble: ParametrosService
    ) {
    }

    ngOnInit() {
      this.servicioInmueble.listarRegistros().subscribe({
        next: (datos) => {
          this.listaRegistros = datos;
        },
        error: (err) => {
          alert("Error leyendo la informacion.")

        }
      })
    }
}
