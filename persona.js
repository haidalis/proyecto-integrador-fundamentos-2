class Persona {
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }
  
  // Puedes agregar métodos adicionales si lo deseas
  // Por ejemplo, un método para obtener el nombre completo de la persona
  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}