function verificoPatente() {
    let patente = document.querySelector('#patente').value
    let patenteVieja = /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$/
    let patenteNueva = /^[a-zA-Z]{3}[0-9]{3}$/
    if (patenteVieja.test(patente) || patenteNueva.test(patente)) {
        if (db.getItem(patente) !== null) {
            alert('No pueden haber dos patentes iguales')
            patente = -1
            return patente
        } else {
            return patente
        }
    } else {
        alert('La patente ingresada no es correcta')
        patente = -1
        return patente
    }
}

const guardarVehiculo = (db,vehiculo) => {
    db.setItem(vehiculo.patente,JSON.stringify(vehiculo))
}

const cargarVehiculos = (db) => {
    let claves = Object.keys(db)

    for(clave of claves){
        let vehiculo = JSON.parse(db.getItem(clave))
        crearVehiculo(vehiculo,db)
    }
}

const crearVehiculo = (vehiculo,db) => {
    document.getElementById('TablaEstacionados').innerHTML += '<tbody><td>' + vehiculo.propietario + '</td><td>' + vehiculo.patente + '</td><td><button id="btnRetirar">Retirar vehiculo</button></td></tbody>'

    let btnRetirar = document.querySelector('#btnRetirar')

    btnRetirar.addEventListener('click',()=>{
        db.removeItem(vehiculo.patente)
        window.location.href='/'
    }
)}
