import  Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null){
      this.snack.open('La contraseña es requerida!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.nombre == '' || this.user.nombre == null){
      this.snack.open('El nombre es requerido!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.apellido == '' || this.user.apellido == null){
      this.snack.open('El apellido es requerido!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.email == '' || this.user.email == null){
      this.snack.open('El email es requerido!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.telefono == '' || this.user.telefono == null){
      this.snack.open('El telefono es requerido!' , 'Aceptar', {
        duration : 2000,
        verticalPosition : 'bottom',
        horizontalPosition : 'right'
      });
      return;
    }



    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Usuario guardado', 'Usuario registrado con exito','success');
      },(error) => {
        console.log(error)
        this.snack.open('Usuario ya esta registrado' , 'Aceptar', {
          duration : 3000,
        });
      }
    )
  }

}