import { Injectable } from '@angular/core';
import { usuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfiguacionRutasBackend } from '../config/configuracion.rutas.backend';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase: string = ConfiguacionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) { }
  /**
   * Idenfiticar usuario
   * @param usuario
   * @param clave
   * @returns datos del usuario validado
   */
  IdentificarUsuario(usuario: string, clave: string): Observable<usuarioModel> {
    return this.http.post<usuarioModel>(`${this.urlBase}identificar-usuario`, {
      correo: usuario,
      clave: clave
    });
  }
  /**
   * Almacena los datos del usuario
   * @param datos datos del usuario
   */

  AlmacenarDatosUsuarioIdentificado(datos: usuarioModel): boolean {
    let cadena = JSON.stringify(datos);
    let datosLS = localStorage.getItem("datos-usuario");
    if (datosLS) {
      return false;
    } else {
      localStorage.setItem("datos-usuario", cadena);
      return true;
    }
  }
  /**
   * Buscar los datos en localstorage de un usuario
   * @returns
   */
  ObtenerDatosUsuariosLS(): usuarioModel | null {
    let datosLS = localStorage.getItem("datos-usuario");
    if (datosLS) {
      let datos = JSON.parse(datosLS);
      return datos;
    } else {
      return null;
    }
  }
/**
 * Validar 2fa
 * @param idUsuario
 * @param codigo
 * @returns
 */
  ValidarCodigo2FA(idUsuario: string, codigo: string): Observable<object> {
    return this.http.post<object>(`${this.urlBase}verificacion-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }
}
