class Veterinaria {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  
  // Puedes agregar métodos adicionales si lo deseas
  // Por ejemplo, un método para mostrar la información de la veterinaria
  mostrarInformacion() {
    return `Veterinaria: ${this.nombre}\nDirección: ${this.direccion}\nTeléfono: ${this.telefono}`;
  }
}