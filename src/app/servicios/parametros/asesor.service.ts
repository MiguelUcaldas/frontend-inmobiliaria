import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';
import { SeguridadService } from '../seguridad.service';
import { PaginadorInmuebleModel } from 'src/app/modelos/paginador.inmueble.model';
import { PaginadorAsesorModel } from 'src/app/modelos/paginador.asesor.model';
import { AsesorModel } from 'src/app/modelos/asesor.model';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  token = "";
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(private http: HttpClient, private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerTokenLocalStorage();
  }

  listarRegistros(pag: number): Observable<PaginadorAsesorModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}asesor?filter={"limit":${limit}, "skip":${skip}}`;
    console.log(this.http.get<PaginadorClienteModel>(url))
    return this.http.get<PaginadorClienteModel>(url);
  }

  BuscarRegistro(id:number):Observable<AsesorModel>{
    return this.http.get<AsesorModel>(`${this.urlBase}asesor/${id}`);
  }

  EliminarRegistro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}asesor/${id}`)
  }

}
