let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://rickandmortyapi.com/api/character/";

const conectar = (url) => {
    return new Promise((resolve,reject)=>{
        const requerido = new XMLHttpRequest();
        requerido.open("GET",url, true);
        requerido.onreadystatechange = () =>{
            if(requerido.readyState === 4){
                if(requerido.status === 200){
                    resolve(JSON.parse(requerido.responseText));

                } else{
                    reject(new Error("Error",url));

                }
            }
        };
        requerido.send();
    });

};

conectar(url)
.then((data) => {
    console.log(data.info.count);
    return conectar(`${url}${data.results[0].id}`);

})
.then((data) => {
    console.log(data.name);
    return conectar(data.origin.url);

})
.then((data) => {
    console.log(data.dimension);
})
.catch((err)=>console.log(err));
