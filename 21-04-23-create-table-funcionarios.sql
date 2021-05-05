CREATE TABLE funcionarios(
	id int not null UNIQUE AUTO_INCREMENT,
    cd_funcionario int not null PRIMARY KEY,
    nome char(55) not null,
    cpf int not null UNIQUE,
    cargo char(55) not null,
    hora_inicio_manha time,
    hora_saida_manha time,
    hora_inicio_tarde time,
    hora_saida_tarde time
);