-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jun-2021 às 00:42
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `registro_ponto`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `controle_ponto`
--

CREATE TABLE `controle_ponto` (
  `id` int(11) NOT NULL,
  `cd_funcionario` int(11) NOT NULL,
  `hora_entrada` time NOT NULL,
  `hora_saida` time DEFAULT NULL,
  `data_atual` date DEFAULT curdate(),
  `createdAt` datetime DEFAULT curdate(),
  `updatedAt` datetime DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `controle_ponto`
--

INSERT INTO `controle_ponto` (`id`, `cd_funcionario`, `hora_entrada`, `hora_saida`, `data_atual`, `createdAt`, `updatedAt`) VALUES
(1, 2, '21:07:55', '21:23:38', '2021-06-18', '2021-06-18 00:07:55', '2021-06-18 00:23:38'),
(2, 2, '21:21:00', '21:27:00', '2021-06-23', '2021-06-23 00:21:30', '2021-06-23 00:27:53'),
(6, 2, '21:32:00', '21:32:00', '2021-06-23', '2021-06-23 00:32:53', '2021-06-23 00:32:55'),
(7, 2, '22:07:00', '22:07:00', '2021-06-23', '2021-06-23 01:07:18', '2021-06-23 01:07:21'),
(8, 2, '22:09:00', '22:09:00', '2021-06-23', '2021-06-23 01:09:19', '2021-06-23 01:09:21'),
(9, 2, '22:14:00', '22:14:00', '2021-06-23', '2021-06-23 01:14:22', '2021-06-23 01:14:24'),
(10, 2, '22:15:00', '22:15:00', '2021-06-23', '2021-06-23 01:15:14', '2021-06-23 01:15:16'),
(11, 2, '22:17:00', '22:17:00', '2021-06-23', '2021-06-23 01:17:49', '2021-06-23 01:17:51'),
(12, 2, '22:21:00', '22:24:00', '2021-06-23', '2021-06-23 01:21:18', '2021-06-23 01:24:56'),
(13, 2, '21:20:00', '21:22:00', '2021-06-25', '2021-06-25 00:20:35', '2021-06-25 00:22:23'),
(14, 2, '21:44:00', '21:44:00', '2021-06-25', '2021-06-25 00:44:01', '2021-06-25 00:44:03'),
(15, 2, '21:45:00', '21:45:00', '2021-06-25', '2021-06-25 00:45:56', '2021-06-25 00:45:58'),
(16, 2, '21:48:00', '21:48:00', '2021-06-25', '2021-06-25 00:48:08', '2021-06-25 00:48:23'),
(17, 2, '21:51:00', '21:51:00', '2021-06-25', '2021-06-25 00:51:11', '2021-06-25 00:51:13'),
(18, 2, '19:11:00', '19:11:00', '2021-06-25', '2021-06-25 22:11:50', '2021-06-25 22:11:52'),
(19, 2, '19:12:00', '19:12:00', '2021-06-25', '2021-06-25 22:12:01', '2021-06-25 22:12:03'),
(20, 2, '19:15:00', '19:15:00', '2021-06-25', '2021-06-25 22:15:47', '2021-06-25 22:15:49'),
(21, 2, '19:15:00', '19:17:00', '2021-06-25', '2021-06-25 22:15:59', '2021-06-25 22:17:29'),
(22, 2, '19:18:00', '19:18:00', '2021-06-25', '2021-06-25 22:18:28', '2021-06-25 22:18:30'),
(23, 2, '19:21:00', '19:21:00', '2021-06-25', '2021-06-25 22:21:03', '2021-06-25 22:21:05'),
(24, 2, '19:21:00', '19:21:00', '2021-06-25', '2021-06-25 22:21:26', '2021-06-25 22:21:28'),
(25, 2, '19:24:00', '19:24:00', '2021-06-25', '2021-06-25 22:24:27', '2021-06-25 22:24:29');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `cd_funcionario` int(11) NOT NULL,
  `nome` char(55) NOT NULL,
  `cpf` int(11) NOT NULL,
  `cargo` char(55) NOT NULL,
  `hora_inicio_manha` time DEFAULT NULL,
  `hora_saida_manha` time DEFAULT NULL,
  `hora_inicio_tarde` time DEFAULT NULL,
  `hora_saida_tarde` time DEFAULT NULL,
  `createdAt` datetime DEFAULT curdate(),
  `updatedAt` datetime DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `funcionarios`
--

INSERT INTO `funcionarios` (`cd_funcionario`, `nome`, `cpf`, `cargo`, `hora_inicio_manha`, `hora_saida_manha`, `hora_inicio_tarde`, `hora_saida_tarde`, `createdAt`, `updatedAt`) VALUES
(1, 'pablo', 2147483647, 'assistente', '08:00:00', '12:00:00', '13:14:00', '18:13:00', '2021-06-11 23:27:07', '2021-06-11 23:27:07'),
(2, 'Pablo', 1320729045, 'assistente', '07:36:00', '12:00:00', '13:37:00', '20:37:00', '2021-06-11 23:37:22', '2021-06-11 23:37:22');

-- --------------------------------------------------------

--
-- Estrutura da tabela `saldohoras`
--

CREATE TABLE `saldohoras` (
  `id` int(11) NOT NULL,
  `cd_funcionario` int(11) NOT NULL,
  `saldo` int(11) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `saldohoras`
--

INSERT INTO `saldohoras` (`id`, `cd_funcionario`, `saldo`, `createdAt`) VALUES
(1, 2, -264, '2021-06-22'),
(2, 2, -261, '2021-06-22'),
(3, 2, -262, '2021-06-24'),
(4, 2, 0, '2021-06-24'),
(5, 2, 0, '2021-06-24'),
(6, 2, 0, '2021-06-24'),
(7, 2, 0, '2021-06-25'),
(8, 2, 0, '2021-06-25'),
(9, 2, 0, '2021-06-25'),
(10, 2, 0, '2021-06-25'),
(11, 2, 0, '2021-06-25'),
(12, 2, 0, '2021-06-25'),
(13, 2, 0, '2021-06-25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `cd_funcionario` int(11) NOT NULL,
  `usuario` char(15) NOT NULL,
  `senha` char(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `cd_funcionario`, `usuario`, `senha`) VALUES
(1, 2, 'pablog', '1234');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `controle_ponto`
--
ALTER TABLE `controle_ponto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cd_funcionario` (`cd_funcionario`);

--
-- Índices para tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`cd_funcionario`),
  ADD UNIQUE KEY `cpf` (`cpf`);

--
-- Índices para tabela `saldohoras`
--
ALTER TABLE `saldohoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cd_funcionario` (`cd_funcionario`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `cd_funcionario` (`cd_funcionario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `controle_ponto`
--
ALTER TABLE `controle_ponto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `cd_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `saldohoras`
--
ALTER TABLE `saldohoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `controle_ponto`
--
ALTER TABLE `controle_ponto`
  ADD CONSTRAINT `controle_ponto_ibfk_1` FOREIGN KEY (`cd_funcionario`) REFERENCES `funcionarios` (`cd_funcionario`);

--
-- Limitadores para a tabela `saldohoras`
--
ALTER TABLE `saldohoras`
  ADD CONSTRAINT `saldohoras_ibfk_1` FOREIGN KEY (`cd_funcionario`) REFERENCES `funcionarios` (`cd_funcionario`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`cd_funcionario`) REFERENCES `funcionarios` (`cd_funcionario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
