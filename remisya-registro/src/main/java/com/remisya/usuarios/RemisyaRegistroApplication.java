package com.remisya.usuarios;

import com.remisya.usuarios.servicio.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class RemisyaRegistroApplication implements CommandLineRunner {
    
    @Autowired
    private UsuarioServicio usuarioServicio;
    	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(RemisyaRegistroApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
 
            /*try{
			Usuario usuario = new Usuario();
			usuario.setNombre("Fabricio");
			usuario.setApellido("Toso");
			usuario.setUsername("Aprobado");
			usuario.setPassword("12345");
			usuario.setEmail("fmt@gmail.com");
			usuario.setTelefono("9654987321");
			usuario.setPerfil("foto.png");
			Rol rol = new Rol();
			rol.setRolId(2L);
			rol.setRolNombre("NORMAL");
			Set<UsuarioRol> usuariosRoles = new HashSet<>();
			UsuarioRol usuarioRol = new UsuarioRol();
			usuarioRol.setRol(rol);
			usuarioRol.setUsuario(usuario);
			usuariosRoles.add(usuarioRol);
			Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuariosRoles);
			System.out.println(usuarioGuardado.getUsername());
		}catch (UsuarioFoundException exception){
			exception.printStackTrace();
		}*/
    
    }

}
