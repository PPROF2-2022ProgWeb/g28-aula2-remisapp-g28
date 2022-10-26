package com.remisya.usuarios.servicio;

import com.remisya.usuarios.modelo.UsuarioRol;
import com.remisya.usuarios.modelo.usuario;
import java.util.Set;



public interface UsuarioServicio {
    
    public usuario guardarUsuario(usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
    
}
