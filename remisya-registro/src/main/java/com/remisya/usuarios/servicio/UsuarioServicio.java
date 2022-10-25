package com.remisya.usuarios.servicio;

import com.remisya.usuarios.dto.UsuarioRegistroDTO;
import com.remisya.usuarios.modelo.usuario;

public interface UsuarioServicio {
    
    	public usuario guardar(UsuarioRegistroDTO registroDTO);
    
}
