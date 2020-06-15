//Api Rick and Morty sin JQuery

//llamar o instanciar la dependencia con require
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character'

function traerDatos(url_api,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText));
            }else {
                const error = new Error("Error"+ url_api);
                return callback(error,null);
            }
        }
    };
    xhttp.send();
}

traerDatos(API, function (error1, data1) {
    if (error1) return console.error(error1);
    traerDatos(API + data1.results[0].id, function (error2, data2) {
      if (error2) return console.error(error2);
      traerDatos(data2.origin.url, function (error3, data3) {
        if (error3) return console.error(error3);
        // hacemos las tres peticiones a la api
        // asi como vimos en otro ejemplo podemos encadenar lo callabacks para estas tres peticiones a la api
        // tres peticiones ok, pero no llegar al callbackHELL
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
      });
    });
  });