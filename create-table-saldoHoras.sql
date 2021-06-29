CREATE TABLE saldoHoras (
    id int not null PRIMARY KEY AUTO_INCREMENT,
    cd_funcionario int not null,
    saldo int not null,
    createdAt DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (cd_funcionario) REFERENCES funcionarios(cd_funcionario)
    )