import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.cargarProductos();

  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log (error);
      }
    );
  }

  borrar( id : number) {
    alert("Borrar el " + id);
  }

}
