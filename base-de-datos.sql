CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(128),
  apellidos VARCHAR(128),
  edad INT,
  cedula VARCHAR(20) UNIQUE,
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(128),
  genero VARCHAR(16),
  raza VARCHAR(64),
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  persona_id INT,
  FOREIGN KEY (persona_id) REFERENCES personas(id)
);

CREATE TABLE veterinarias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(128),
  direccion VARCHAR(255),
  telefono VARCHAR(16),
  creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE animales_veterinarias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  animal_id INT,
  veterinaria_id INT,
  FOREIGN KEY (animal_id) REFERENCES animales(id),
  FOREIGN KEY (veterinaria_id) REFERENCES veterinarias(id)
);