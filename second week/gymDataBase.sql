CREATE TABLE [IF NOT EXIST] gym (
  cnpj VARCHAR (100) PRIMARY KEY,
  name VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE [IF NOT EXIST] students (
  cpf VARCHAR (11) PRIMARY KEY,
  name VARCHAR (100), 
  CONSTRAINT fk_gym
    FOREIGN KEY (cnpj)
      REFERENCES gym (cnpj)
);

CREATE TABLE [IF NOT EXIST] modality (
  id_modality INT PRIMARY KEY,
  vacancy_qt INT,
  description VARCHAR (100) 
);

CREATE TABLE [IF NOT EXIST] registration (
  registration_id INT,
  date_registration DATE,
  CONSTRAINT fk_students
    FOREIGN KEY (cpf)
      REFERENCES students (cpf),
  CONSTRAINT fk_modality
    FOREIGN KEY (id_modality)
      REFERENCES modality (id_modality)
);
