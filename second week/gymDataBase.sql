DROP TABLE IF EXISTS gym;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS modality;
DROP TABLE IF EXISTS registration;

CREATE TABLE gym (
  cnpj VARCHAR (14) PRIMARY KEY,
  name VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE students (
  cpf VARCHAR (11) PRIMARY KEY,
  name VARCHAR (100),
  cnpj VARCHAR (14), 
  CONSTRAINT fk_gym
    FOREIGN KEY (cnpj)
      REFERENCES gym (cnpj)
);

CREATE TABLE modality (
  id_modality INT PRIMARY KEY,
  name VARCHAR (50),
  vacancy_qt INT,
  description VARCHAR (100) 
);

CREATE TABLE registration (
  date_registration DATE,
  cpf VARCHAR (11),
  id_modality INT,
  PRIMARY KEY (cpf, id_modality), 
  CONSTRAINT fk_students
    FOREIGN KEY (cpf)
      REFERENCES students (cpf),
  CONSTRAINT fk_modality
    FOREIGN KEY (id_modality)
      REFERENCES modality (id_modality)
);


INSERT INTO 
    gym (cnpj, name)
VALUES 
    ('12345678000100', 'Ripped Gym'),
    ('23456699000100', 'The Giants Gym');

INSERT INTO
    students (cpf, name, cnpj)
VALUES
    ('00123456789', 'Victor Gabriel dos Santos Monger', '12345678000100'),
    ('00987654321', 'Cesar Gabriel Farias', '12345678000100'),
    ('01023443299', 'Carla Botelho Santos', '23456699000100'),
    ('03098778900', 'Diogo Felipe Stefano', '23456699000100');

INSERT INTO 
    modality (id_modality, name, vacancy_qt, description)
VALUES
    (1, 'Boxing', 100, 'combat sport and a martial art in which two people fight for a predetermined time in a ring'),
    (2, 'Powerlifting', 100, 'strength sport that consists of three attempts at maximal weight on three different exercises');

INSERT INTO
    registration (date_registration, cpf, id_modality)
VALUES
    ('11/01/2024', '00123456789', 1),
    ('28/05/2023', '00123456789', 2),
    ('03/07/2021', '00987654321', 1),
    ('06/02/2022', '00987654321', 2),
    ('18/04/2020', '01023443299', 1),
    ('30/06/2022', '03098778900', 2);