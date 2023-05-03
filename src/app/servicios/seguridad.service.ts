import { Injectable } from '@angular/core';
import { usuarioModel } from '../modelos/usuario.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ConfiguacionRutasBackend } from '../config/configuracion.rutas.backend';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase : string = ConfiguacionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) { }

  IdentificarUsuario(usuario : string, clave :string):Observable<usuarioModel>{
    return this.http.post<usuarioModel>(`${this.urlBase}identificar-usuario`,{
      correo: usuario,
      clave: clave
    });

  }
}
