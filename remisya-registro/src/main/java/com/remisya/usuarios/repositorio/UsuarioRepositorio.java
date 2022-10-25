package com.remisya.usuarios.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.remisya.usuarios.modelo.usuario;


@Repository
public interface UsuarioRepositorio extends JpaRepository<usuario, Long> {
    
    	public usuario findByEmail(String email);
    
}
