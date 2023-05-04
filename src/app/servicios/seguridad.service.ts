import { Injectable } from '@angular/core';
import { usuarioModel } from '../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfiguacionRutasBackend } from '../config/configuracion.rutas.backend';
import { UsuarioValidadoModel } from '../modelos/usuario.validado.model';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase: string = ConfiguacionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {
    this.validacionDeSesion();
  }

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
  ValidarCodigo2FA(idUsuario: string, codigo: string): Observable<UsuarioValidadoModel> {
    return this.http.post<UsuarioValidadoModel>(`${this.urlBase}verificacion-2fa`, {
      usuarioId: idUsuario,
      codigo2fa: codigo
    });
  }

  /**
   * Guarda en local storage la informacion del usuario validado
   * @param datos datos del usuario validado
   * @returns respuesta
   */

  AlmacenarDatosUsuarioValidado(datos: UsuarioValidadoModel): boolean {
    let datosLS = localStorage.getItem("datos-sesion");
    if (datosLS != null) {
      return false;
    } else {
      let datosString = JSON.stringify(datos);
      localStorage.setItem("datos-sesion", datosString);
      return true;
    }
  }
  /**
   * Administracion de la sesion del usuario
   */

  datosUsuarioValidado = new BehaviorSubject<UsuarioValidadoModel>(new UsuarioValidadoModel());

  ObtenerDatosSesion(): Observable<UsuarioValidadoModel> {
    return this.datosUsuarioValidado.asObservable();

  }

  validacionDeSesion() {
    let ls = localStorage.getItem("datos-sesion");
    if (ls) {
      let objUsuario = JSON.parse(ls);
      this.ActualizarComportamientoUsuario(objUsuario);
    }
  }

  ActualizarComportamientoUsuario(datos: UsuarioValidadoModel) {
    return this.datosUsuarioValidado.next(datos);
  }
}
