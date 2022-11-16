import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto [] = [];

  constructor(
    private productoService: ProductoService,
    private snack:MatSnackBar
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(() => {

      Swal.fire('Producto eliminado', 'Producto eliminado con exito','success');

      this.cargarProductos()

    }, error => {
      console.log(error)

      Swal.fire('Producto no eliminado', 'Producto eliminado no ha sido con exito','error');;

    })
  }




}

