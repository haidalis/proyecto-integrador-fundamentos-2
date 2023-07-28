class Animal {
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }
  
  // Puedes agregar métodos adicionales si lo deseas
  // Por ejemplo, un método para obtener información del animal
  obtenerInformacion() {
    return `Nombre: ${this.nombre}, Género: ${this.genero}, Raza: ${this.raza}`;
  }
}