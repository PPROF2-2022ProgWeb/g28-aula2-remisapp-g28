import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/Services/auth.service';
import { DateValidator } from 'src/app/Services/date.validator';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  formularioRegistro: FormGroup = this.formBuilder.group({

    'nombre': ['', [Validators.required, Validators.minLength(3)] ],
    'apellido': ['', [Validators.required, Validators.minLength(3)] ],
    'email': ['', [Validators.required, Validators.minLength(3), Validators.email] ],
    //'zona': ['', [Validators.required, Validators.minLength(3)] ],
    'fechaNac': ['', [Validators.required, DateValidator.LessThanToday] ],
    'contraseña':['', [Validators.required, Validators.minLength(8)] ],
    'contraseñarep':['', [Validators.required, Validators.minLength(8)] ]
  })

 // public user = {
 //   username : '',
 //   password : '',
 //   nombre : '',
 //   apellido : '',
 //   email : '',
 //   telefono : ''
 // }

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 // ngOnInit(): void {
 // }

 campoEsValido(campo:string){

  return this.formularioRegistro.controls[campo].errors &&  this.formularioRegistro.controls[campo].touched

}

guardar(){

  if(this.formularioRegistro.invalid || this.repitaPassword()){
    Swal.fire({
      icon: 'error',
      title: 'Error de Inicio de Sesión',
      text: 'Revise los campos, hay errores'
    })
  }else{
    this.registro();
    Swal.fire({
      title: 'Registrando el usuario',
      html: 'Porfavor, espere. Le indicaremos cuando hayamos finalizado. ',
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }
  
}

registro() {

  const {nombre,apellido,email,fechaNac,zona,contraseña,contraseña2} = this.formularioRegistro.value;
  console.log(nombre)
  this.authService.register(nombre,apellido,email,zona,fechaNac,contraseña,contraseña2)

}
repitaPassword() {

if(this.formularioRegistro.value["contraseña"] != this.formularioRegistro.value["contraseña2"]  ){
 return true
} else {
  return false
}

}
  
  
  
  
  
  
  
  
  
  
  //formSubmit(){
  //  console.log(this.user);
  //  if(this.user.username == '' || this.user.username == null){
  //    this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
  //      duration : 3000,
  //      verticalPosition : 'top',
  //      horizontalPosition : 'right'
  //    });
  //    return;
  //  }

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

//}