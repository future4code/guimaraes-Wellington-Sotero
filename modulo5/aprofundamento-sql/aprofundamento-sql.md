USE guimaraes-4211527-wellington-sotero

# APROFUNDAMENTO SQL

SET SQL_SAFE_UPDATES = 0;

#### Exercício 1:
#### -A: Exclui a coluna salary da tabela actor;
#### -B: Vai alertar a coluna gender da tabela actor para receber valores null;
#### -C:
ALTER TABLE actor
MODIFY gender VARCHAR(100);

#### Exercício 2:
#### -A:
UPDATE actor
SET name = "Julia Dalavia", birth_date = "1998-02-09"
WHERE id = "003";
#### -B:
UPDATE actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
#### -C:
UPDATE actor
SET name = "Tarcísio Meira", salary = 700000, birth_date = "1935-10-05", gender="male"
WHERE id = "005";

#### -D:
UPDATE actor
SET name = "Rugal Apelão"
WHERE id = "009";
###Não foi criado nenhuma nova linha com os dados no update

#### Exercício 3:
#### -A:
DELETE FROM actor WHERE name = "Fernanda Montenegro";

#### -B: 
DELETE FROM actor WHERE (gender = "male") AND (salary >1000000);

#### Exercício 4:
#### -A: 
SELECT MAX(salary)
FROM actor;
#### -B: 
SELECT MIN(salary)
FROM actor
WHERE gender = "female";
#### -C:
SELECT COUNT(*) FROM actor
WHERE gender="female";
#### -D:
SELECT SUM(salary)
FROM actor;

#### Exercício 5:
#### -A: 
SELECT COUNT(*), gender 
FROM actor
GROUP BY gender;
### 2 grupos são separados pela query; atores e atrizez como determinado por gênero.
#### -B:
SELECT name, id FROM actor
ORDER BY name DESC;
#### -C: 
SELECT * FROM actor
ORDER BY salary;
#### -D:
SELECT * FROM actor
ORDER BY salary
LIMIT 3;
#### -E:
SELECT AVG(salary), gender
FROM actor
GROUP BY gender;

#### Exercício 6: 
#### -A: 
ALTER TABLE movie 
ADD playing_limit_date VARCHAR(8) NOT NULL;
#### -B: 
 #Já tinha craido o rating com valor de float no ex passado;
 ALTER TABLE movie
 MODIFY playing_limit_date VARCHAR(10);
 #### -C: 
 SELECT * FROM movie;
 UPDATE movie
 SET playing_limit_date = "2018-01-31"
 WHERE id = "003";
 UPDATE movie
 SET playing_limit_date = "2022-06-30"
 WHERE id = "004";

 #### -D: 
 DELETE FROM movie WHERE id="002";
 UPDATE movie 
 SET sinopsis = "teste para ver no que vai dar"
 WHERE id = "002";
 ###Quando é realizado a busca, a sinopse não é atualizada e o SQL não encontra erros.
 SELECT *FROM movie;