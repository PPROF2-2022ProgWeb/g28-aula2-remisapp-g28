import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {



  loginData = {
    'username' : '',
    'password' : ''
  }


  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router){

  }


  ngOnInit(): void {

  }

  formSubmit(){
    //Hace q salte un pop up informandome si es correcto o requerido
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open( 'El nombre de usuario es requerido', 'Aceptar', {
        duration : 3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open( 'La contraseña es requerida', 'Aceptar', {
        duration : 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        //Genero un token y lo almacena en el local storage
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRol() == "ADMIN"){

            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);

          }else if(this.loginService.getUserRol() == "NORMAL"){

            //window.location.href = "/home";
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);

          }else{
            this.loginService.logout();
          }
        })

      },(error) => {
        console.log(error);
        this.snack.open('Detalles invalidos, vuelva a itentar', 'Aceptar',{
          duration : 3000
        })
      })

    }


}
