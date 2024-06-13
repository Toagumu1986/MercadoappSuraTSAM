//consumindo el API para acceder a los datos de la base de datos
let url="http://localhost:8080/storeapi/v1/usuario"

let peticion={
    method:"GET",
    Headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //RECORRIENDO LA RESPUESTA PARA HACER RENDER
    let fila=document.getElementById("fila")

    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","shadow", "h-100")
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid")
        imagen.src=usuario.//

        let nombreProducto=document.createElement("h5")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=usuario.nombre 


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreProducto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    }) 
})
.catch(function(respuesta){
    console.log(respuesta)
})