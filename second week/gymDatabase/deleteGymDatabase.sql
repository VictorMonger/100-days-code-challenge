DELETE FROM students s
USING registrations r
WHERE s.cpf = r.cpf

DELETE FROM modalities m
USING registrations r
WHERE m.id = r.modality_id