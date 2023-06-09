import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';
import { SeguridadService } from '../seguridad.service';
import { PaginadorInmuebleModel } from 'src/app/modelos/paginador.inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  token = "";
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTokenLocalStorage();
  }

  listarRegistros(pag: number): Observable<PaginadorInmuebleModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}cliente?filter={"limit":${limit}, "skip":${skip}}`;
    console.log(this.http.get<PaginadorClienteModel>(url))
    return this.http.get<PaginadorClienteModel>(url);
  }
}
