import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { SeguridadService } from '../seguridad.service';
import { PaginadorAsesorModel } from 'src/app/modelos/paginador.asesor.model';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';

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
  return this.http.get<PaginadorAsesorModel>(url);
}
}
