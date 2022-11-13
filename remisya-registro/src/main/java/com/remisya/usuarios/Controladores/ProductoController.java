package com.remisya.usuarios.Controladores;

import com.remisya.usuarios.configuraciones.dto.Mensaje;
import com.remisya.usuarios.configuraciones.dto.ProductoDto;
import com.remisya.usuarios.modelo.Producto;
import com.remisya.usuarios.servicio.ProductoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin

public class ProductoController {

    @Autowired
    ProductoService productoService;

    @GetMapping("/lista")
    public ResponseEntity<List<Producto>> list() {
        List<Producto> list = productoService.list();
        return new ResponseEntity<List<Producto>>(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Producto> getById(@PathVariable("id") int id) {
        if (!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

        Producto producto = productoService.getOne(id).get();
        return new ResponseEntity(producto, HttpStatus.OK);

    }


    @GetMapping("/detalles/{nombre}")
    public ResponseEntity<Producto> getByNombre(@PathVariable("nombre") String nombre) {
        if (productoService.existsByNombre(nombre))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);

            Producto producto = productoService.getByNombre(nombre).get();
            return new ResponseEntity(producto, HttpStatus.OK);

    }


    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductoDto productoDto) {
        if (StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        if (productoDto.getPrecio() < 0)
            return new ResponseEntity(new Mensaje("El precio debe ser mayor que 0 "), HttpStatus.BAD_REQUEST);

        if (productoService.existsByNombre(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);


            Producto producto = new Producto(productoDto.getNombre(), productoDto.getPrecio());
            productoService.save(producto);
            return new ResponseEntity(new Mensaje("Producto creado"), HttpStatus.OK);
        }

        @PostMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, ProductoDto productoDto) {

        if (!productoService.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        }

        if (StringUtils.isBlank(productoDto.getNombre()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);

        if (productoDto.getPrecio() < 0)
            return new ResponseEntity(new Mensaje("El precio debe ser mayor que 0 "), HttpStatus.BAD_REQUEST);

        if (productoService.existsByNombre(productoDto.getNombre()) && productoService.getByNombre(productoDto.getNombre()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);


        Producto producto = productoService.getOne(id).get();
        producto.setNombre(productoDto.getNombre());
        producto.setPrecio(productoDto.getPrecio());
        productoService.save(producto);
        return new ResponseEntity(new Mensaje("Producto Actualizado"), HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!productoService.existsById(id))
            return new ResponseEntity(new Mensaje("No existe"), HttpStatus.NOT_FOUND);
        productoService.delete(id);
        return new ResponseEntity(new Mensaje("Producto Eliminado"), HttpStatus.OK);
    }

}



