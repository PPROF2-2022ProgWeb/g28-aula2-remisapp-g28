package com.remisya.usuarios.servicio;

import com.remisya.usuarios.dto.UsuarioRegistroDTO;
import com.remisya.usuarios.modelo.Rol;
import com.remisya.usuarios.modelo.usuario;
import com.remisya.usuarios.repositorio.UsuarioRepositorio;
import java.util.Arrays;
import org.springframework.stereotype.Service;


@Service
public class UsuarioServicioImpl implements UsuarioServicio {

    	private UsuarioRepositorio usuarioRepositorio;

    public UsuarioServicioImpl(UsuarioRepositorio usuarioRepositorio) {
        super();
        this.usuarioRepositorio = usuarioRepositorio;
    }
        
    
    @Override
    public usuario guardar(UsuarioRegistroDTO registroDTO) {
        		usuario usuario = new usuario(registroDTO.getNombre(), 
				registroDTO.getApellido(),registroDTO.getEmail(),
				registroDTO.getPassword(), Arrays.asList(new Rol("ROLE_USER")));
		return usuarioRepositorio.save(usuario);
    }
    
}
