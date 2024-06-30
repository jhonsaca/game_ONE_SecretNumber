//Definición de variable
let maxNumbers = 10;
let sortedNumber=[];
//et num = randomNumber();
let count=1;

begin();
//Función para el botón
function userTry(){
    let userNum;
    userNum = parseInt(document.getElementById("userinput").value);
    verifYNumber(userNum, num);
}

//Función para poder cambiar el texto en los elementos
function insertText(elemento, texto){
    let elementH = document.querySelector(elemento);
    elementH.innerHTML= texto;
}

function randomNumber() {
    let number= Math.floor(Math.random()*maxNumbers+1);
    console.log(sortedNumber);
    console.log(number);

    if (sortedNumber.length==maxNumbers) {
        insertText(".texto__parrafo", "Se acabó, se han sorteado los números posibles");
    }else{
        if(sortedNumber.includes(number)){
            return randomNumber();
        }else{
            sortedNumber.push(number);
            return number;
        }
    }
    
}

//Función para verificar números
function verifYNumber(num1, num2) {
    if(num1===num2){
        insertText(".texto__parrafo",`Has acertado correctamente en ${count} ${count == 1 ? "intento": "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intent").setAttribute("disabled", true);
    }else{
        if(num1<num2){
            insertText(".texto__parrafo", "Has fallado. El número secreto es mayor");
        }else{
            insertText(".texto__parrafo", "Has fallado. El número secreto es menor");
        }
        count++;
        clearBox();
    }
}

function clearBox(){
    let  box = document.getElementById("userinput");
    box.value= "";
}

function rebootGame(){
    clearBox();
    begin();
}

function begin(){
    insertText("h1", "Adivina el número!");
    insertText(".texto__parrafo", `Ingresa un numero entre 1 y ${maxNumbers} y presiona intentar`);
    num = randomNumber();
    count = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("intent").removeAttribute("disabled");
}

