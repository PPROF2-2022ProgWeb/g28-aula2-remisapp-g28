-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Remis_YA
-- -----------------------------------------------------
-- Base de datos actualizada. 

-- -----------------------------------------------------
-- Schema Remis_YA
--
-- Base de datos actualizada. 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Remis_YA` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `Remis_YA` ;

-- -----------------------------------------------------
-- Table `Remis_YA`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`usuario` (
  `id_usuario_r` INT NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NULL,
  `id_cuenta_usuario` INT NULL,
  PRIMARY KEY (`id_usuario_r`),
  UNIQUE INDEX `id_usuario_r_UNIQUE` (`id_usuario_r` ASC) VISIBLE,
  UNIQUE INDEX `id_cuenta_usuario_UNIQUE` (`id_cuenta_usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`usuario_nr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`usuario_nr` (
  `id_usuario_nr` INT NOT NULL AUTO_INCREMENT,
  `id_ciudad` INT NOT NULL,
  `id_solicitar_viaje` INT NOT NULL,
  `nombre_usuario_nr` VARCHAR(45) NOT NULL,
  `apellido_usuario_nr` VARCHAR(45) NOT NULL,
  `email_usuario_nr` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario_nr`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`ciudad` (
  `id_ciudad` INT NOT NULL,
  `nombre_ciudad` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NULL,
  `id_cuenta_usuario` INT NULL,
  `id_usuario_nr` INT NULL,
  PRIMARY KEY (`id_ciudad`),
  UNIQUE INDEX `id_ciudad_UNIQUE` (`id_ciudad` ASC) VISIBLE,
  UNIQUE INDEX `id_cuenta_usuario_UNIQUE` (`id_cuenta_usuario` ASC) VISIBLE,
  UNIQUE INDEX `id_usuario_nr_UNIQUE` (`id_usuario_nr` ASC) VISIBLE,
  CONSTRAINT `id_usuario_nr`
    FOREIGN KEY (`id_usuario_nr`)
    REFERENCES `Remis_YA`.`usuario_nr` (`id_usuario_nr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`cuenta_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`cuenta_usuario` (
  `id_cuenta_usuario` INT NOT NULL AUTO_INCREMENT,
  `id_usuario_r` INT NOT NULL,
  `id_ciudad` INT NOT NULL,
  `id_factura` INT NOT NULL,
  `nombre_usario` VARCHAR(45) NOT NULL,
  `apellido_usuariol` VARCHAR(45) NOT NULL,
  `email_usuario` VARCHAR(45) NOT NULL,
  `telefono_usuario` VARCHAR(45) NOT NULL,
  `domicilio_usuario` VARCHAR(45) NOT NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `id_usuario_r_UNIQUE` (`id_usuario_r` ASC) VISIBLE,
  UNIQUE INDEX `is_localidad_UNIQUE` (`id_factura` ASC) VISIBLE,
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE,
  UNIQUE INDEX `usuario_rcol_UNIQUE` (`contrasena` ASC) VISIBLE,
  PRIMARY KEY (`id_cuenta_usuario`),
  UNIQUE INDEX `id_cuenta_usuario_UNIQUE` (`id_cuenta_usuario` ASC) VISIBLE,
  INDEX `id_ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  UNIQUE INDEX `id_ciudad_UNIQUE` (`id_ciudad` ASC) VISIBLE,
  CONSTRAINT `id_usuario_r`
    FOREIGN KEY (`id_usuario_r`)
    REFERENCES `Remis_YA`.`usuario` (`id_usuario_r`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `id_ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `Remis_YA`.`ciudad` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`nota_credito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`nota_credito` (
  `id_notacredito` INT NOT NULL AUTO_INCREMENT,
  `id_factura` INT NOT NULL,
  `importe_nota_credito` FLOAT NOT NULL,
  `detalle_nota_credito` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id_notacredito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `id_factura` INT NOT NULL,
  `id_carrito` INT NOT NULL,
  `pedido_detalle` VARCHAR(100) NOT NULL,
  `usario_detalles` VARCHAR(100) NOT NULL,
  `datos_adicionales` VARCHAR(45) NULL,
  UNIQUE INDEX `id_pedido_UNIQUE` (`id_pedido` ASC) VISIBLE,
  PRIMARY KEY (`id_pedido`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`factura` (
  `id_factura` INT NOT NULL AUTO_INCREMENT,
  `id_cuenta_usuario` INT NOT NULL,
  `id_pedido` INT NOT NULL,
  `id_notacredito` INT NULL,
  `id_pago` INT NULL,
  `numero_factura` VARCHAR(45) NOT NULL,
  `fecha_factura` DATE NOT NULL,
  `hora_factura` VARCHAR(45) NOT NULL,
  `importe_factura` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `id_factura_idx1` (`id_pedido` ASC) VISIBLE,
  INDEX `id_factura_idx2` (`id_notacredito` ASC) VISIBLE,
  UNIQUE INDEX `id_pago_UNIQUE` (`id_pago` ASC) VISIBLE,
  INDEX `id_cuenta_usuario_idx` (`id_cuenta_usuario` ASC) VISIBLE,
  CONSTRAINT `id_factura`
    FOREIGN KEY (`id_notacredito`)
    REFERENCES `Remis_YA`.`nota_credito` (`id_notacredito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_cuenta_usuario`
    FOREIGN KEY (`id_cuenta_usuario`)
    REFERENCES `Remis_YA`.`cuenta_usuario` (`id_factura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_factura`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `Remis_YA`.`pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `id_factura` INT NOT NULL,
  `id_cuenta_usuario` INT NOT NULL,
  `fecha_pago` DATE NOT NULL,
  `importe_pago` FLOAT NOT NULL,
  `vuelto_pago` FLOAT NOT NULL,
  `medio_de_pago` VARCHAR(45) NOT NULL,
  `detalle_pago` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pago`),
  UNIQUE INDEX `id_pago_UNIQUE` (`id_pago` ASC) VISIBLE,
  UNIQUE INDEX `id_factura_UNIQUE` (`id_factura` ASC) VISIBLE,
  UNIQUE INDEX `id_cuenta_usuario_UNIQUE` (`id_cuenta_usuario` ASC) VISIBLE,
  INDEX `id_pago_idx` (`id_pago` ASC, `id_cuenta_usuario` ASC) VISIBLE,
  CONSTRAINT `id_pago`
    FOREIGN KEY (`id_factura`)
    REFERENCES `Remis_YA`.`factura` (`id_factura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_pago`
    FOREIGN KEY (`id_pago` , `id_cuenta_usuario`)
    REFERENCES `Remis_YA`.`cuenta_usuario` (`id_usuario_r` , `id_cuenta_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`Carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`Carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `id_pedido` INT NULL,
  `id_abonos` INT NULL,
  `id_viaje` INT NULL,
  `detalle_cantidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  INDEX `id_carrito_idx` (`id_pedido` ASC) VISIBLE,
  CONSTRAINT `id_carrito`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `Remis_YA`.`pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`Viaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`Viaje` (
  `id_viaje` INT NOT NULL AUTO_INCREMENT,
  `id_carrito` INT NOT NULL,
  `id_usuario_nr` INT NOT NULL,
  `dir_origen` VARCHAR(45) NOT NULL,
  `dir_destino` VARCHAR(45) NOT NULL,
  `nombre_pasajero` VARCHAR(45) NOT NULL,
  `fecha_viaje` VARCHAR(45) NOT NULL,
  `hora_viaje` VARCHAR(45) NOT NULL,
  `info_adicional` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_viaje`),
  INDEX `id_viaje_idx` (`id_usuario_nr` ASC) VISIBLE,
  INDEX `id_viaje_idx1` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `id_viaje`
    FOREIGN KEY (`id_usuario_nr`)
    REFERENCES `Remis_YA`.`usuario_nr` (`id_usuario_nr`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_viaje`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `Remis_YA`.`Carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Remis_YA`.`Abonos_Mensuales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Remis_YA`.`Abonos_Mensuales` (
  `id_abonos` INT NOT NULL AUTO_INCREMENT,
  `id_carrito` INT NULL,
  `tipo_abono` VARCHAR(45) NOT NULL,
  `cantidad_abono` INT NOT NULL,
  `descripcion_abono` VARCHAR(45) NOT NULL,
  `info_adicional` VARCHAR(45) NULL,
  PRIMARY KEY (`id_abonos`),
  INDEX `id_abonos_idx` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `id_abonos`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `Remis_YA`.`Carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
