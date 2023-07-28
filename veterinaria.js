class Veterinaria {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  
  // Puedes agregar m�todos adicionales si lo deseas
  // Por ejemplo, un m�todo para mostrar la informaci�n de la veterinaria
  mostrarInformacion() {
    return `Veterinaria: ${this.nombre}\nDirecci�n: ${this.direccion}\nTel�fono: ${this.telefono}`;
  }
}