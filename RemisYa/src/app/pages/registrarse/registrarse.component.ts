import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
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

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

   // this.userService.añadirUsuario(this.user).subscribe(
   //   (data) => {
  //      console.log(data);
 //       Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
 //     },(error) => {
 //       console.log(error);
  //      this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
   //       duration : 3000
    //    });
    //  }
 //   )
  }

}