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

function fecha(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    console.log("la fecha de hoy es "+fecha);
    console.log("dia "+dia+"\nmes "+(mes+1)+"\nAño "+anio+"\ y la hora es "+hora+":"+minutosgit );
}

function AgregarTarea(){
    let tarea = document.getElementById("tarea").value;
    let tareasGuardadas = document.getElementById("Lista").getElementsByTagName("Li");

    if(tarea === "" || tarea === " "){
        alert("ingrese una tarea")
        return;
    };

    for(let i=0; i<tareasGuardadas.length;i++){
        if(tarea == tareasGuardadas[i].firstChild.textContent.trim()){
            console.log("la tarea nueva es "+tarea+" y la antigua es "+tareasGuardadas[i].textContent);
            alert("La tarea ya existe");
            return
        }else{
            console.log("entró al else");
        }
    }

    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = tarea+" ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function (){
        nuevaTarea.remove();
    };

    nuevaTarea.appendChild(botonEliminar);

    document.getElementById("Lista").appendChild(nuevaTarea);
    document.getElementById("tarea").value="";

}