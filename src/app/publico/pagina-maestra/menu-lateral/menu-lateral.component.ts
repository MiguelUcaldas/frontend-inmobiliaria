import { Component } from '@angular/core';
import { ItemMenuModel } from 'src/app/modelos/item.menu.model';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const menuLateral:any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  listaMenus: ItemMenuModel[] = []
  constructor(
    private servicioSeguridad: SeguridadService
    ){
  }
  ngOnInit(){
    this.listaMenus = this.servicioSeguridad.ObtenerItemsMenuLateral();
    menuLateral();



  }
}
