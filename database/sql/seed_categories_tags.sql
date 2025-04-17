-- Requêtes pour remplir la table categories
INSERT INTO categories (name, created_at, updated_at) VALUES 
('Motivation', NOW(), NOW()),
('Politique', NOW(), NOW()),
('Histoire', NOW(), NOW()),
('Éducation', NOW(), NOW());


-- Requêtes pour remplir la table tags
INSERT INTO tags (name, created_at, updated_at) VALUES 
('Courage', NOW(), NOW()),
('Persévérance', NOW(), NOW()),
('Liberté', NOW(), NOW()),
('Bonheur', NOW(), NOW()),
('Temps', NOW(), NOW()),
('Vie', NOW(), NOW()),
('Mort', NOW(), NOW()),
('Travail', NOW(), NOW());



-- Pour vérifier que les données ont bien été insérées
SELECT * FROM categories;
SELECT * FROM tags;
