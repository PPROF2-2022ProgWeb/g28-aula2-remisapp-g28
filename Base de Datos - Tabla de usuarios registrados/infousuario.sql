-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2021 a las 20:19:10
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `remisapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infousuario`
--

CREATE TABLE `infousuario` (
  `nombre` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni` int(11) NOT NULL,
  `date` date NOT NULL,
  `barrio` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `infousuario`
--

INSERT INTO `infousuario` (`nombre`, `apellido`, `telefono`, `dni`, `date`, `barrio`, `direccion`) VALUES
('Persona', 'Uno', '351351351', 11222333, '1900-01-01', 'San Juan', 'Casa antigua'),
('Chizzo ', 'Nápoli', '351223344', 11444777, '1967-04-01', 'Crucero', 'En su casa'),
('James', 'Hetfield', '351998866', 11444778, '1963-08-03', 'San Juan', 'En su casa de campo'),
('Kun', 'Agüero', '351351351', 30333000, '1800-01-01', 'San Juan', 'aaa'),
('Lionel', 'Messi', '351898989', 33333333, '1987-06-24', 'Sur', 'ACB'),
('Fabricio Matías', 'Toso', '03512465607', 34131677, '1989-01-29', 'San Juan', 'Nada');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `infousuario`
--
ALTER TABLE `infousuario`
  ADD PRIMARY KEY (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
