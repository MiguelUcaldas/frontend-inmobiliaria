import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../../modelos/inmueble.model';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  urlBase: string = ConfiguracionRutasBackend.urlProperties;
  constructor(private http: HttpClient) { }
/**
 * Listado de inmuebles
 * @returns
 */
  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.urlBase}?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`); // Verificar si es inmueble o propiedad

  }

  listarRegistrosPaginados(pag: number): Observable<PaginadorProductoModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorProductoModel>(`${this.urlBase}producto-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }
}
