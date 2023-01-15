window.onload = function () {
  document.querySelector(".mi-form").addEventListener("submit", function(e){

    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("confirm-password").value;
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    var noEnviar = false;

    //Comprobacion nombre
    if(name.length > 0){
      document.getElementById("nombreBien").style.display = "inline";
      document.getElementById("nombre").className = 'correcto';
    }
    else{
      document.getElementById("nombreMal").style.display = "inline";
      document.getElementById("nombre").className = 'incorrecto';

      //texto
      document.getElementById("textname").style.display = "inline";
      document.getElementById("textname").textContent = "Rellena el campo";
      noEnviar = true;
    };

    //Comprobacion correo
    if(email.length <= 0){
      document.getElementById("correoMal").style.display = "inline";
      document.getElementById("email").className = 'incorrecto';

      //texto
      document.getElementById("textemail").style.display = "inline";
      document.getElementById("textemail").textContent = "Rellena el campo" ;
      noEnviar = true;
    };
    //validar correo
    let validador =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(validador.test(document.getElementById("email").value)){
      document.getElementById("correoBien").style.display = "inline";
      document.getElementById("email").className = 'correcto';
      document.getElementById("correoBien").style.display = "inline";
    }
    else{
      document.getElementById("correoMal").style.display = "inline";
      document.getElementById("email").className = 'incorrecto';

      //texto
      document.getElementById("textemail").style.display = "inline";
      document.getElementById("textemail").textContent = "Email invalido";
      noEnviar = true;
    };

    //Comprobar si esta vacia la primera contraseña
    if(pass1.length <= 0){
      document.getElementById("textpass2").style.display = "inline";
      document.getElementById("textpass2").textContent = "Rellena el campo";
      document.getElementById("password").className = 'incorrecto';
      document.getElementById("passMal2").style.display = "inline";
      noEnviar = true;
    };
    //Comprobar si esta vacia la segunda contraseña
    if(pass2.length <= 0){
      document.getElementById("textpass").style.display = "inline";
      document.getElementById("textpass").textContent = "Rellena el campo";
      document.getElementById("confirm-password").className = 'incorrecto';
      document.getElementById("passMal").style.display = "inline";
      noEnviar = true;
    };
    if(pass1.length > 0 && pass2.length > 0){
      if(pass1 !== pass2){
        document.getElementById("passMal").style.display = "inline";
        document.getElementById("passBien2").style.display = "inline";
        document.getElementById("password").className = 'correcto';
        document.getElementById("confirm-password").className = 'incorrecto';
        document.getElementById("textpass").style.display = "inline";
        document.getElementById("textpass").textContent = "Las contraseñas no coinciden";
        noEnviar = true;
      }
      else{
        document.getElementById("passBien").style.display = "inline";
        document.getElementById("passBien2").style.display = "inline";
        document.getElementById("password").className = 'correcto';
        document.getElementById("confirm-password").className = 'correcto';
      };
    };
    if (noEnviar) {
      e.preventDefault();
    }
    
  });
}