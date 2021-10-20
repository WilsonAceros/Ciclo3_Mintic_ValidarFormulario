function validar_formulario() {
  var nombre = document.formRegistro.nombre;
  var username = document.formRegistro.username;
  var email = document.formRegistro.correo;
  var password = document.formRegistro.password;

  console.log(nombre.value,username.value,email.value,password.value);


  if (username.value === "" || email.value ===  "" || password.value === ""){
    alert("Todos los campos deben ser obligatorios");
  }else {
        var username_len = username.value.length;
        if (username_len == 0 || username_len < 8) {
          alert("Debes ingresar un username con min. 8 caracteres");
          passid.focus();
          return false; //Para la parte dos, que los datos se conserven
        }

        var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (!email.value.match(formato_email)) {  //El método match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
          alert("Debes ingresar un email electronico valido!");
          email.focus();
          return false; //Para la parte dos, que los datos se conserven
        }

        var passid_len = password.value.length;
        if (passid_len == 0 || passid_len < 8) {
          alert("Debes ingresar una password con mas de 8 caracteres");
          passid.focus();
        }
  }
}
