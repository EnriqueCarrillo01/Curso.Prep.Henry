// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  let a = nombre;
  let b = edad;
const gatoCreado = {
  nombre: a,
  edad: b,
  meow: function() {
    return "Meow!";
  }
}
return gatoCreado;
}
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  let a = objeto;
  let b = property;
  a[b] = null;
  return a;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  let a = objeto;
  let b = metodo;
  console.log(a[b]())
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
let a = objetoMisterioso;
let b = a["numeroMisterioso"]
return a["numeroMisterioso"] * 5; 
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  let a = objeto;
  delete a[unaPropiedad];
  return a;
  }


function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const a = {
    "nombre": nombre,
    "email": email,
    "password": password,
  };
  return a;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  let a = usuario;
  if(a["email"] === null) {
    return false;
  }
  else if(a["email"] === undefined) {
    return false;
  }
  else {
    return true;
  }
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  let a = objeto;
  let b = propiedad;
  if(a.hasOwnProperty(b) === true) {
    return true;
  }
  else {
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  let a=usuario;
  let b=password;
  if (a["password"] === b) {
    return true;
  }
  else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  let a=usuario;
  let b=nuevaPassword;
  a["password"] = b;
  return a;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  let a = usuario;
  let b = nuevoAmigo;
  a["amigos"].push(b);
  return a;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  let a = usuarios;
  for(let i=0;i < a.length; i++) {
    a[i]["esPremium"] = true;
  }
  return a;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let a = usuario;
  let product = 0;
  for(let i=0; i < a["posts"].length; i++) {
    product = product + a["posts"][i]["likes"];
  }
  return product;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
let a = producto;
a.calcularPrecioDescuento = function() {
  let c = this.precio;
  let b = this.porcentajeDeDescuento
  return c - (c * b)
}
return a;
}







// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
