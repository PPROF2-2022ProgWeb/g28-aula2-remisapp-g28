import { Component, OnInit } from '@angular/core';
import { rol } from '../interfaces/rol.interface';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../Services/auth.service';
import { LoginService } from '../Services/login.service';
import { ProtectedService } from '../Services/protected.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:any = null;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

    this.user = this.loginService.getUser();

  }

}

 
 
 
  /* idstring = localStorage.getItem('id')!
  id: number = +this.idstring //parseo a number
  rol: rol = {
    "authority" : "SIN ROL"
  } 

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  usuario: User = {
    id: 0,
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
    
    
    }

    constructor(private protectedService : ProtectedService,
      private authService: AuthService           ) { }

      ngOnInit(): void {

        this.protectedService.getUser(this.id)
        .subscribe( (usuario) => {
        
          this.usuario = usuario; 
          console.log("Query OK");
    
                console.log(this.usuario)
        
         
        }, (err) => {
    
         
          console.log("error")
        })
      
        this.authService.getRole().subscribe((rol => {
    
          this.rol.authority = rol[0].authority
          console.log(this.rol.authority)
    
        }))
    
    
      }

} */
