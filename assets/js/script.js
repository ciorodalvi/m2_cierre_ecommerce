(() => {
  // -------- BOTON DE ALERTA ----------
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById('liveAlertBtn');
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Gracias por ponerte en contacto con nosotros!', 'success');
    });
  }

  // BOTON VOLVER ARRIBA
  const botonVolver = document.getElementById("botonVolver");

  // MOSTRAR U OCULTAR
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      botonVolver.style.display = "block";
    } else {
      botonVolver.style.display = "none";
    }
  });

  // ACCION AL HACER CLICK
  botonVolver.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // INICIO LOGICA CARRUSEL
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  // FIN LOGICA CARRUSEL


})();
