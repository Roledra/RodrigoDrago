let savedClave= "2525"


function login(){
    let ingresar= false;
    for(let i = 2; i >= 0; i--){
let userClave= prompt("Bienvenido al hospital catanga \n1 ingresa tu PIN");
if(userClave == savedClave) {
    alert("Bienvenido al hospital Catanga");
    ingresar=true;2525
break;
}
else{
    alert("error te quedan" + i +"oportunidades")
    }

    }
    return ingresar;

}
//console.log(login());



let exito= login()
if(exito){
//dentro de la cuenta del sanatorio
let opcion= prompt('Elegi tu motivo de visita: \n1- Sacar un turno. \n2 - Cancelar un turno. \n3 - Radiografias. \n4 - Resonancias. \n5 - Para salir aprete "n".');

while(opcion != "n"){
switch(opcion){
    case "1":
        alert("Ahora le llegara un correo con el turno medico gracias")
        break;

        case "2":
            alert("elige el turno que quieras cancelar")

            break;
1
            case "3":
                alert("Tu turno ha sido agengado para el proximo lunes, muchas gracias")
    
                break;

             case "4":
                alert("Tu turno ha sido agengado para el proximo lunes, muchas gracias")
    
                break;


        default:
            alert("opcion no valida")
            break;
        }



opcion= prompt('Elegi tu motivo de visita: \n1- Sacar un turno. \n2 - Cancelar un turno. \n3 - Radiografias. \n4 - Resonancias. \n5 - Para salir aprete " n ".');
}

}

