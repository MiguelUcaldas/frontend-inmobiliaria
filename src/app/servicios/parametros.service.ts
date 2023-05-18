import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguacionRutasBackend } from '../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  urlBase: string = ConfiguacionRutasBackend.urlProperties;
  constructor(private http: HttpClient) { }
/**
 * Listado de inmuebles
 * @returns
 */
  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.urlBase}?filter={"limit":${ConfiguracionPaginacion.registroPorPagina}}`); // Verificar si es inmueble o propiedad

  }
}
