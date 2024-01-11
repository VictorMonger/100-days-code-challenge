DROP TABLE IF EXISTS gyms;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS modalities;
DROP TABLE IF EXISTS registrations;

CREATE TABLE gyms (
  cnpj VARCHAR (14) PRIMARY KEY,
  name VARCHAR (100) NOT NULL
);

CREATE TABLE students (
  cpf VARCHAR (11) PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  cnpj VARCHAR (14), 
  
  CONSTRAINT fk_gyms
    FOREIGN KEY (cnpj)
      REFERENCES gyms(cnpj)
);

CREATE TABLE modalities (
  id INT PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL,
  vacancy_qt INT NOT NULL,
  description VARCHAR (255) 
);

CREATE TABLE registrations (
  registration_date DATE,
  cpf VARCHAR (11),
  modality_id INT,
  PRIMARY KEY (cpf, modality_id), 

  CONSTRAINT fk_students
    FOREIGN KEY (cpf)
      REFERENCES students(cpf),
  
  CONSTRAINT fk_modalities
    FOREIGN KEY (modality_id)
      REFERENCES modalities(id)
);
