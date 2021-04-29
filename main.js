var hu = parseInt(prompt("Quiere el huevo frito? \n Marque 1 para sí \n Marque 2 para no"));

switch (hu) {
    case 1:
        alert("Se procede a fritar el huevo");
        var sal = parseInt(prompt("Quiere sal en el huevo? \n Marque 1 para sí \n Marque 2 para no"));

        if(sal == 1){
            console.log("Se ha servido el huevo frito en su plato con sal");
        }
        else if (sal == 2){
            console.log("Se ha servido el huevo frito en su plato sin sal");
        }
        else {
            console.log("ERROR");
        
        }
        break;
    case 2:
        alert("Se procede a hervir el huevo");
        var sal = parseInt(prompt("Quiere sal en el huevo? \n Marque 1 para sí \n Marque 2 para no"));

        if(sal == 1){
            console.log("Se ha servido el huevo hervido en su plato con sal");
        }
        else if (sal == 2){
            console.log("Se ha servido el huevo hervido en su plato sin sal");
        }
        else {
            console.log("ERROR");

        }
        break;
default:
     alert(`La opcion no existe`);
    break;
}

