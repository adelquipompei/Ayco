document.addEventListener('DOMContentLoaded', () => {
  const carrousell = () => {

    let carrousel = document.querySelector('#carrousel');
    let imgCarrousel = document.querySelectorAll('.img-carrousel');
    let buscador = document.querySelector('#buscador');
  
    let percent = 0;
    let i = 0;
  
    // Mueve las imágenes del carrusel
    let moverImg = () => {
      i++;
      if (i === imgCarrousel.length) { percent = 0; i = 0; } else { percent -= 100; }
      imgCarrousel.forEach(img => img.style.translate = percent + '%');
    };
    setInterval(moverImg, 5000);
  
    let scrollBuscador;
  
    // Función para obtener la posición del buscador
    let getScrollBuscador = () => {
      scrollBuscador = buscador.getBoundingClientRect().top + window.scrollY;
      scrollBuscador -= scrollBuscador * 25 / 100;
      console.log('scroll-buscador: ' + scrollBuscador);
    };
  
    // Escucha cambios en el tamaño de la ventana para recalcular la posición
    window.addEventListener('resize', () => {
      getScrollBuscador();
    });
  
    // Recalcula valores y aplica efectos al hacer scroll
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY;
      let distancia = scrollBuscador - scroll;
      let distanciaPorcentual = Math.max(0, distancia / scrollBuscador * 100);
      let scaleAmount = 1 + (1 - distanciaPorcentual / 100) * 0.1;
      carrousel.style.opacity = `${Math.min(distanciaPorcentual, 100)}%`;
      carrousel.style.transform = `translateY(-20%) scale(${scaleAmount})`;
      buscador.style.transform = `translateY(${scroll / -7}px)`;
    });

    // Recalcula la posición del buscador
    getScrollBuscador();
  };
  
  // Espera a que todas las imágenes del carrusel estén cargadas
  fetch('php/api.php')
    .then(resp => resp.json())
    .then(car => {
      let carrousel = document.querySelector('#carrousel');

      // Crear y agregar las imágenes al DOM
      car.forEach(car => {
        let { imagenes } = car;
        let src = `${imagenes[0].substring(3, 23)}carrousel-header/carrousell-header-${imagenes[0].slice(23)}`;
        let imgSrc = document.createElement('img');
        imgSrc.classList.add('img-carrousel');
        imgSrc.setAttribute('src', src);
        carrousel.appendChild(imgSrc);
      });

      // Espera hasta que todas las imágenes estén cargadas
      let imgLoadPromises = Array.from(document.querySelectorAll('.img-carrousel')).map(img => {
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve; // También considerar errores de carga
        });
      });

      // Ejecutar el carrusel después de que todas las imágenes estén listas
      Promise.all(imgLoadPromises).then(() => {
        carrousell();
      });
    })
    .catch(error => console.log(error));
});
