let numeroSecreto = 0;
let intentos=0;
listaNumerosSorteados =[];
let numeroMaximo=10;

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos===1)? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto>numeroUsuario){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else{
            asignarTextoElemento('p','El numero secreto es menor');
            }
        intentos++;
        limpiarCaja();
        }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p',`Escriba un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //generar el numero aleatorio
    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}
condicionesIniciales();



