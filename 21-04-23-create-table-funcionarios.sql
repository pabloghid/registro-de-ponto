CREATE TABLE funcionarios(
    cd_funcionario int not null PRIMARY KEY AUTO_INCREMENT,
    nome char(55) not null,
    cpf int not null UNIQUE,
    cargo char(55) not null,
    hora_inicio_1 time,
    hora_saida_1 time,
    hora_inicio_2 time,
    hora_saida_2 time,
    createdAt datetime DEFAULT CURRENT_DATE,
    updatedAt datetime DEFAULT CURRENT_DATE
);