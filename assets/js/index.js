window.onload = function(){
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  //===
  // VARIABLES
  //===
  const DATE_TARGET = new Date('04/13/2022 0:01 AM');
  // DOM for render
  const SPAN_DAYS = document.querySelector('span#days');
  const SPAN_HOURS = document.querySelector('span#hours');
  const SPAN_MINUTES = document.querySelector('span#minutes');
  const SPAN_SECONDS = document.querySelector('span#seconds');
  // Milliseconds for the calculations
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
  
  //===
  // FUNCTIONS
  //===
  
  /**
  * Method that updates the countdown and the sample
  */
  function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
    
    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
  }
  
  //===
  // INIT
  //===
  updateCountdown();
  // Refresh every second
  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

  document.querySelector("#suscribirse_button").addEventListener("click", function(event) {
    var texto = document.getElementById("suscribirse_text")
    if (texto.value == ""){
      document.getElementById("suscribirse_exito").style.display = "block"
      document.getElementById("suscribirse_exito").innerHTML = "El email es obligatorio"
    }else{
      document.getElementById("suscribirse_exito").style.display = "block"
      document.getElementById("suscribirse_exito").innerHTML = "Te has sucrito correctamente"
    }
    
    event.preventDefault();
  }); 
  document.querySelector("#enviar_boton").addEventListener("click", function(event) {
    var ayuda = document.getElementById("ayuda")
    var email = document.getElementById("Email")
    var nombre = document.getElementById("Nombre")
    if (ayuda.value != "" && email.value != "" && nombre.value != ""){
      document.getElementById("ayuda").value = ""
      document.getElementById("Email").value = ""
      document.getElementById("Nombre").value = ""
      document.getElementById("contacto_texto").innerHTML = "Mensaje enviado correctamente"
      document.getElementById("contacto_texto").style.display = "block"
    }else{
      document.getElementById("contacto_texto").innerHTML = "Los campos son obligatirios"
      document.getElementById("contacto_texto").style.display = "block"
    }
    event.preventDefault();
  });
};

