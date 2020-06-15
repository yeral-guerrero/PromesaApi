function sumar(numero1,numero2)
{
    return numero1+numero2;
}

function calcular(numero1,numero2,callback)
{
 return callback(numero1,numero2);
}

console.log(calcular(100,710,sumar));

//Tiempo
function fecha(callback) {
    console.log(new Date());
    setTimeout(function(){
        let date = new Date();
        callback(date)
    },3000);
}

function imprimirfecha(datenow){
    console.log(datenow);
}
fecha(imprimirfecha);
