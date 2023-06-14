import { Injectable } from '@angular/core';
import { contactenosUsuarioModel } from '../modelos/contactenos-usuario.model';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicaNegocioService {
  urlBase: string = ConfiguracionRutasBackend.urlNegocio;
  constructor(
    private http: HttpClient
  ) { }

  EnvioCorreoContactenos(datos: any): Observable<boolean> {
    return this.http.post<any>(`${this.urlBase}contactenos`, datos);
  }

  EnvioCorreoSolicitud(datos: any): Observable<boolean> {
    return this.http.post<any>(`${this.urlBase}solicitud`, datos);
  }
}
