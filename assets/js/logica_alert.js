(() => {
    // -------- BOTON DE ALERTA CONTACTO ----------
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  const appendAlert = (message, type) => {
   alertPlaceholder. innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
         <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      `;

  };

 const liveAlertBtnAgregar = document.getElementById('liveAlertBtnAgregar');
  const liveAlertBtn = document.getElementById('liveAlertBtn');

  if (liveAlertBtnAgregar) {
    liveAlertBtnAgregar.addEventListener('click', () => {
      appendAlert('Producto agregado al carrito', 'success');
    });
  }

  if (liveAlertBtn) {
    liveAlertBtn.addEventListener('click', () => {
      appendAlert('Gracias por ponerte en contacto con nosotros!', 'success');
    });
  }

})();