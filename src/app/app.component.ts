import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productos = [
    { codigo: 1, descripcion: 'coronita', precio: '0.50' },
    { codigo: 2, descripcion: 'incaKola', precio: '2.50' },
    { codigo: 3, descripcion: 'cocacola', precio: '3.50' },
    { codigo: 4, descripcion: 'cañonazo', precio: '0.70' },
    { codigo: 5, descripcion: 'agua cielo', precio: '1.20' }
  ];

  art = {
    codigo: null,
    descripcion: null,
    precio: null
  };
  manito: number;

  articulos = [
    { codigo: 1, descripcion: 'coronita', precio: '0.50' },
    { codigo: 2, descripcion: 'incaKola', precio: '2.50' },
    { codigo: 3, descripcion: 'cocacola', precio: '3.50' },
    { codigo: 4, descripcion: 'cañonazo', precio: '0.70' },
    { codigo: 5, descripcion: 'agua cielo', precio: '1.20' }
  ];

  @ViewChild('selector2', { static: false }) selector: SelectornumericoComponent;

  fijarSelector2(valor: number) {
    this.selector.fijar(valor);
  }

  hayRegistro() {
    return this.articulos.length > 0;
  }

  borrar(art) {
    // tslint:disable-next-line:prefer-for-of
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === art.codigo) {
        this.articulos.splice(x, 1);
        return;
      }
    }
  }

  agregar() {
    // tslint:disable-next-line:prefer-for-of
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }
    this.articulos.push(
      {
        codigo: this.art.codigo,
        descripcion: this.art.descripcion,
        precio: this.art.precio
      }
    );
  }


  modificar() {
    // tslint:disable-next-line:prefer-for-of
    for (let x = 0; x < this.articulos.length; x++) {
      if (this.articulos[x].codigo === this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
      alert('No existe el codigo de articulo ingresado');
    }
  }

  seleccionar(art) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }


}
