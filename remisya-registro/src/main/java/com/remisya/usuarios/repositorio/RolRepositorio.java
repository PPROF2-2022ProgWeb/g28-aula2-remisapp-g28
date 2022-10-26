package com.remisya.usuarios.repositorio;

import com.remisya.usuarios.modelo.Rol;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RolRepositorio extends JpaRepository<Rol,Long> {
    
}
