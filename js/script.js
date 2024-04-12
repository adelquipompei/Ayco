


fetch('php/api.php').then(resp => resp.json()).then(data => {
    data.forEach(car =>{
        console.log(car)
        let caja  = document.createElement('div');
        caja.classList.add('caja')
        let section = document.querySelector('#cars');
        section.appendChild(caja);
        let titulo = document.createElement('h2');
        let desc = document.createElement('p');
        titulo.innerText = car.Marca;
        desc.innerHTML = car.Modelo;
        caja.append(titulo,desc);
    })
})

