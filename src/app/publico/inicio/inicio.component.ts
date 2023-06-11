import { Component } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/parametros/inmueble.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listaRegistros: InmuebleModel[] = [];

  constructor(
    private servicio: InmuebleService
  ) {
  }

  ngOnInit() {
    this.servicio.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {

      }
    })
  }
}
