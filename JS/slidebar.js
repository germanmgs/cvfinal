/*menu deslizante*/

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


/*boton para mostrar correo*/

 function mostrarcorreo() {
  var x = document.getElementById("mail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*boton para subir*/ 

window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("myBtn").style.display = "block";

  } else {
      document.getElementById("myBtn").style.display = "none";
 }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
