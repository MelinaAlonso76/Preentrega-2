const propietario = document.querySelector('#propietario')
const patente = document.querySelector('#patente')
const btnIngresar = document.querySelector('#btnIngresar')
const form = document.querySelector('#form')
const db = window.localStorage

//CAPACIDAD DEL ESTACIONAMIENTO
const capacidad = 10
let autosEst = []

btnIngresar.addEventListener('click',()=>{
    let vehiculo = {
        propietario: propietario.value,
        patente: verificoPatente()
    }
    if(localStorage.length>capacidad-1){
        alert('NO HAY LUGAR DISPONIBLE')
    }else if(vehiculo.patente !== -1){
        guardarVehiculo(db,vehiculo)
    }
})
cargarVehiculos(db)


function validar(){
    let desabilitar = false
    if(propietario.value === ''){
        desabilitar = true
    }
    if(patente.value === ''){
        desabilitar = true
    }
    if(desabilitar===true){
        btnIngresar.disabled=true;
    }else{
        btnIngresar.disabled = false;
    }
}
form.addEventListener('keyup',validar)
