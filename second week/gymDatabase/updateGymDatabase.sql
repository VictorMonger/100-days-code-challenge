UPDATE gyms
SET name = 'Changed Gym'
WHERE cnpj = '23456699000100'
RETURNING *

UPDATE students
SET name = 'Diogo Felipe Stefano Monger'
WHERE cpf = '03098778900'
RETURNING *

