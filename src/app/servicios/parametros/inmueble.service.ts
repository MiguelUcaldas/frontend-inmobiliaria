import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InmuebleModel } from '../../modelos/inmueble.model';
import { ConfiguracionRutasBackend } from '../../config/configuracion.rutas.backend';
import { ConfiguracionPaginacion } from '../../config/configuracion.paginacion';
import { PaginadorInmuebleModel } from 'src/app/modelos/paginador.inmueble.model';
import { ArchivoModel } from 'src/app/modelos/archivo.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient) { }
  /**
   * Listado de inmuebles
   * @returns
   */
  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(`${this.urlBase}propiedad?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`);
  }

  listarRegistrosPaginados(pag: number): Observable<PaginadorInmuebleModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorInmuebleModel>(`${this.urlBase}propiedad-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`);
  }

  AgregarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.post(`${this.urlBase}propiedad`, registro)
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(`${this.urlBase}cargar-archivo-inmueble`, formData);
  }

  BuscarRegistro(id:number):Observable<InmuebleModel>{
    return this.http.get<InmuebleModel>(`${this.urlBase}propiedad/${id}`);
  }

  EditarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.put(`${this.urlBase}propiedad/${registro._id}`, registro)
  }

  EliminarRegistro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}propiedad/${id}`)
  }
}

