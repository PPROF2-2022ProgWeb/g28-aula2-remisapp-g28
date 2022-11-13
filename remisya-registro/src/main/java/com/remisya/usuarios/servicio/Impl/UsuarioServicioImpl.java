package com.remisya.usuarios.servicio.Impl;

import com.remisya.usuarios.modelo.UsuarioRol;
import com.remisya.usuarios.modelo.usuario;
import com.remisya.usuarios.repositorio.RolRepositorio;
import com.remisya.usuarios.repositorio.UsuarioRepositorio;
import com.remisya.usuarios.servicio.UsuarioServicio;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuarioServicioImpl implements UsuarioServicio {
    
        @Autowired
    private UsuarioRepositorio usuarioRepository;

    @Autowired
    private RolRepositorio rolRepository;

    @Override
    public usuario guardarUsuario(usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());
        if(usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new Exception("El usuario ya esta presente");
        }
        else{
            for(UsuarioRol usuarioRol:usuarioRoles){
                rolRepository.save(usuarioRol.getRol());
            }
            usuario.getUsuarioRoles().addAll(usuarioRoles);
            usuarioLocal = usuarioRepository.save(usuario);
        }
        return usuarioLocal;
    }

      @Override
    public usuario obtenerUsuario(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public void eliminarUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }

    
}
