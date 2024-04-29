const carrousell = () => {
    
let carrousel = document.querySelector('#carrousel');
let imgCarrousel = document.querySelectorAll('.img-carrousel');
let buscador = document.querySelector('#buscador');

let percent = 0;
let i = 0;
let moverImg = () => {
    i++
    if (i == imgCarrousel.length){percent = 0;i=0;}else{percent-=100};
    imgCarrousel.forEach(img => img.style.translate = percent + '%');
};
setInterval(moverImg,5000);
window.addEventListener('scroll',()=>{
    
    let scroll =  window.scrollY;
    carrousel.style.opacity = `${1-scroll/450} `;
    buscador.style.transform = `translateY(${scroll/-7}px)`;

})
   
}

fetch('php/api.php').then(resp => resp.json()).then(car =>{
  car.forEach(car => {
      let {id,Marca,Modelo,año,imagenes} = car;
      //console.log(imagenes[0])
     // let a = ` ${img.substring(0,23)}thumb/thumb-${img.slice(23)}`;
     let src = `${imagenes[0].substring(3,23)}carrousel-header/carrousell-header-${imagenes[0].slice(23)}`
     let imgSrc = document.createElement('img')
    imgSrc.classList.add('img-carrousel');
    imgSrc.setAttribute('src', src);
    carrousel.appendChild(imgSrc)
    carrousell();
      

      












  })
}).catch(error=>console.log(error))


  
    
    
 
   
  
    
    


    
