

  document.getElementById("send-button").addEventListener("click", function(){

    Toastify({
        text: "¡Gracias por suscribirte! ✈️",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#DD2C26",
          borderRadius: "8px",
        },
        onClick: function(){}
      }).showToast();

  });