//Para crear cualquier variable de cualquier tipo 
var variable = "juan";
//var ingreso_texto = prompt("quien eres");//para mostrar un aventana de ingreso de texto

function hola(nombre) {
    console.log("hola " + nombre + " dentro de una funcion")
}

if (true) {
    hola(variable);
}

function ejercicio() {
    let num1 = prompt("numero 1");
    let num2 = prompt("numero 2");

    var resta = num1 - num2;
    console.log("la resta es "+resta);

    if(resta >= 1){
        alert("la resta es mayor a cero");
            if (resta % 2 == 0) {
                console.log("numero par");
            } else {
                console.log("numero impar");
            } 
    }else{
        alert("la resta es menor a cero");
    }
}

function ciclo(){
    let numero = prompt("ingrese hast aque numero desea contar");

    for(let i=1; i<=numero;i++){
        console.log(i+"\n");
    }
}

function ciclo2(){
    for(let i=10; i>=0;i--){
        console.log(i+"\n");
        if(i==0){
            console.log("Feliz año nuevo");
        }
    }
}