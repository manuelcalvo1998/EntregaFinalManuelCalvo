const guardoDatosJSON = ()=> {
    //debugger
    const datosForm = {Alimento:"", Cantidad: 0, Precio: 0}
    datosForm.Alimento = Alimento.value
    datosForm.Cantidad = Cantidad.value
    datosForm.Precio = Precio.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
    console.info("Se ha almacenado correctamente")
}



const recuperoDatosJSON = ()=> {
    //debugger
    if (localStorage.getItem("datosDelForm") !=null) {
    datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"))
    Alimento.value = datosDelForm.Alimento
    Cantidad.value = datosDelForm.Cantidad
    Precio.value = datosDelForm.Precio
    }
}

recuperoDatosJSON()

function alert() {
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Atencion',
    text: "Desea guardar los datos cargados?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'No, gracias',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        '¡Listo!',
        'Tus datos fueron guardados correctamente.',
        'success'
      )
    } else if (
    
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Borrando datos',
        'Recuerde que para mejor servicio son secesarios tus datos',
        'error'
      )
    }
  })
}

//Aplicando FETCH//

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response)=> Response.jason())
  .then((data)=> {
    const contenidoDisponible = data
    contenidoDisponible.forEach(contenido => {
      const li = document.guardoDatosJSON("li")
      li.innerHTML = `
                <h4>${producto.Alimento}</h4>
                <p>${producto.Precio}</p>
                <p>Código: ${producto.Cantidad}</p>
                <hr/>
    });
  }