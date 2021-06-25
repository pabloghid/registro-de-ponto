CREATE TABLE controle_ponto(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    cd_funcionario int not null,
    hora_entrada time not null,
    hora_saida time,
   	data_atual date DEFAULT CURRENT_DATE,
    createdAt datetime DEFAULT CURRENT_DATE,
    updatedAt datetime DEFAULT CURRENT_DATE,
    FOREIGN KEY (cd_funcionario) REFERENCES funcionarios(cd_funcionario)
);