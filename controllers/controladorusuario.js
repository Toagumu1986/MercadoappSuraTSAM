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
        
        let nombreUsuario=document.createElement("h5")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombres 

        let cedulaUsuario=document.createElement("h5")
        cedulaUsuario.classList.add("text-center")
        cedulaUsuario.textContent=usuario.cedula 

        let correoUsuario=document.createElement("h5")
        correoUsuario.classList.add("text-center")
        correoUsuario.textContent=usuario.correo 


        tarjeta.appendChild(nombreUsuario)
        tarjeta.appendChild(cedulaUsuario)
        tarjeta.appendChild(correoUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    }) 
})
.catch(function(respuesta){
    console.log(respuesta)
})