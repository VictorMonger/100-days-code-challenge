SELECT s.*, g.name gym_name FROM students s
  INNER JOIN gyms g ON g.cnpj = s.cnpj
WHERE s.cnpj = '12345678000100';

SELECT s.*, m.name modality_name FROM students s
  INNER JOIN registrations r ON r.cpf = s.cpf
  INNER JOIN modalities m ON m.id = r.modality_id
WHERE m.id = 1

SELECT s.*, g.name gym_name, m.name modality_name FROM students s
  INNER JOIN gyms g ON g.cnpj = s.cnpj
  INNER JOIN registrations r ON r.cpf = s.cpf
  INNER JOIN modalities m ON m.id = r.modality_id
WHERE 
  g.cnpj = '12345678000100' 
  AND m.id = 1
  AND registration_date > current_date - interval '1' month