var edad = prompt("BIENVENIDO AL TESE  ¿Ingresar Matricula?");
    var ine = prompt ("Traes Credencial");
   
    if (edad >= 18) {
        document.write("Bienvenido al TESE");
        
    } else{
        document.write();
    }
switch (ine) {
    case "si":
        document.write("")
        break;
    case "no":
        document.write(">No Puedes Ingrsar ");
        break;
    default:
        document.write(">Opcion no Valida Intente de Nuevo");
        break;
};
