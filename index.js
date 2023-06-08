function actualizarCartelConfirmacion(){
    //OBTENER LA TABLA
    var tabla = document.getElementById("tablaReservas");
    var booking = document.getElementById("bookingOk")
    //CONTAR LOS REGISTROS
    var registros = document.getElementsByTagName("td");
    //SI TIENE REGISTROS, NADA
    //SI NO TIENE REGISTROS, OCULTAR CARTEL
    if(registros.length < 1){
      booking.style.display="none";
      tabla.style.display = "none";
      //"visibility: hidden"
      //OBTENER CARTEL
      //STYLE.DISPLAY = "NONE"
    }
  }
  
  function agregarFila_1() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var asientosAdulto = document.getElementById("asientos").value;
    var asientosNiño = document.getElementById("asientoskid").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Montaña rusa";
    // Obten más valores de campos de entrada según tus necesidades
    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);

      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }

  function agregarFila_2() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha2").value;
    var hora = document.getElementById("hora2").value;
    var asientosAdulto = document.getElementById("asientos2").value;
    var asientosNiño = document.getElementById("asientoskid2").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Super looping";
    // Obten más valores de campos de entrada según tus necesidades

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);
      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }

  function agregarFila_3() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha3").value;
    var hora = document.getElementById("hora3").value;
    var asientosAdulto = document.getElementById("asientos3").value;
    var asientosNiño = document.getElementById("asientoskid3").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Lanzadera";
    // Obten más valores de campos de entrada según tus necesidades

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);
      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }

  function agregarFila_4() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha4").value;
    var hora = document.getElementById("hora4").value;
    var asientosAdulto = document.getElementById("asientos4").value;
    var asientosNiño = document.getElementById("asientoskid4").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Noria";
    // Obten más valores de campos de entrada según tus necesidades

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);
      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }
  function agregarFila_5() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha5").value;
    var hora = document.getElementById("hora5").value;
    var asientosAdulto = document.getElementById("asientos5").value;
    var asientosNiño = document.getElementById("asientoskid5").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Casa del terror";
    // Obten más valores de campos de entrada según tus necesidades

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);
      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }
  function agregarFila_6() {
    // Obtén los valores de los campos de entrada
    var fecha = document.getElementById("fecha6").value;
    var hora = document.getElementById("hora6").value;
    var asientosAdulto = document.getElementById("asientos6").value;
    var asientosNiño = document.getElementById("asientoskid6").value;
    var atraccion = document.createElement("p");
    atraccion.textContent = "Coches de Choque";
    // Obten más valores de campos de entrada según tus necesidades

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById("tablaReservas");
    var fila = tabla.insertRow();
    var confirmed = document.getElementById("confirmed");
    var booking = document.getElementById("bookingOk")
    booking.style.display="block";
    confirmed.style.display = "block";
    tabla.style.display = "block";
    // Agrega las celdas a la nueva fila
    var celdaAtraccion = fila.insertCell(0);
    var celdaFecha = fila.insertCell(1);
    var celdaHora = fila.insertCell(2);
    var celdaAsientos = fila.insertCell(3);
    var celdaAsientoskid = fila.insertCell(4);
    var celdaBorrar = fila.insertCell(5);
    // Agrega más celdas según tus necesidades

    // Establece los valores de las celdas con los datos ingresados
    celdaFecha.innerHTML = fecha;
    celdaHora.innerHTML = hora;
    celdaAsientos.innerHTML = asientosAdulto;
    celdaAsientoskid.innerHTML = asientosNiño;
    celdaAtraccion.innerHTML = atraccion.textContent;
    // Establece más valores de celdas según tus necesidades

    // Agrega el botón o icono de borrado a la celda correspondiente
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.onclick = function () {
      tabla.deleteRow(fila.rowIndex);
      actualizarCartelConfirmacion();
    };
    celdaBorrar.appendChild(botonBorrar);

    // Restablece los valores de los campos de entrada
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("asientos").value = "";
    document.getElementById("asientoskid").value = "";
    // Restablece más valores de campos de entrada según tus necesidades
    tabla.scrollIntoView({ behavior: "smooth" });
  }
  function refreshPage() {
    location.reload();
  }