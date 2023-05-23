function saludar(){
    alert("Bienvenido a Vole Home, para acceder al catalogo mayorista ingrese sesion");
}
saludar()


let usuario= prompt("ingrese aqui tu usuario");
let contrasena= prompt("ingrese su contrasena");

if(usuario === "lucamposu"  && contrasena === "12345") {
    alert("Bienvenida Lucamposu a Vole Home");
} else{ 
    alert("usuario o contrasena incorrectos");
}


let opcion = prompt(
    "Elige un producto para agregar al carrito \n1-Almohadon\n2-Manta\n3-Acolchado\n4-Mantel\ningrese x para finalizar la compra"
  );
let productos;  
  while (opcion != "x") {
    
    switch (opcion) {
        case "1":
            console.log("seleccionaste un almohadon");
            productos= productos + " almohadon,";
            break;
            
        case "2":
            console.log("seleccionaste una manta");
            productos= productos + " manta,";
            break;

        case "3":
            console.log("seleccionaste un acolchado");
            productos= productos + " acolchado,";
            break;

        case "4":
            console.log("seleccionaste un mantel");
            productos= productos + " mantel,";
            break;
 
    } 
    
    opcion=prompt(
        "Elige un producto para agregar al carrito \n1-Almohadon\n2-Manta\n3-Acolchado\n4-Mantel\ningrese x para finalizar la compra"
      );
  }
  console.log("carrito de compras:" + productos);