class Animal {
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }
  
  // Puedes agregar m�todos adicionales si lo deseas
  // Por ejemplo, un m�todo para obtener informaci�n del animal
  obtenerInformacion() {
    return `Nombre: ${this.nombre}, G�nero: ${this.genero}, Raza: ${this.raza}`;
  }
}