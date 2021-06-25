CREATE TABLE usuarios(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    cd_funcionario int not null,
    usuario char(15) not null UNIQUE,
    senha char(55) not null,
    FOREIGN KEY (cd_funcionario) REFERENCES funcionarios(cd_funcionario)
)