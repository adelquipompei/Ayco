fetch('../php/api.php').then(resp => resp.json()).then(data => {
    data.forEach(car => {
        console.log(car)
        let tbody = document.querySelector('#tbody');
        let fila = document.createElement('tr');
        fila.classList.add('fila');
        fila.setAttribute('data-id', car.id);
        fila.setAttribute('data-marca', car.Marca);
        fila.setAttribute('data-modelo', car.Modelo);
        fila.setAttribute('data-year', car.año);
        fila.setAttribute('data-img', car.imagenes)
        

        tbody.appendChild(fila);
        let td = ` 
    <td scope="row">${car.Marca}</td>
    <td scope="row"> ${car.Modelo} </td>
    <td scope="row"> ${car.imagenes[0]} </td>
    <td scope="row"> ${car.año} </th>
    <td class="accion"></td>`;
        fila.innerHTML = td;


    });
    let filas = document.querySelectorAll('.fila');
    filas.forEach(row => {
        row.addEventListener('mouseenter', (e) => {
            let accion = `<span id="editar"><i class="ti ti-edit"></i> Editar</span> <span id="eliminar"><i
                class="ti ti-trash"></i> Eliminar</span>`;

            e.target.querySelector('.accion').innerHTML = accion;
            //let editar = e.target.querySelector('#editar');
            let eliminar = e.target.querySelector('#eliminar');
            eliminar.addEventListener('click', () => {
                confirm(`Desea Eliminar ${e.target.dataset.marca} ${e.target.dataset.modelo} Modelo: ${e.target.dataset.year}?`) ?  window.location.href = `../php/delete.php?id=${e.target.dataset.id}&imagenes=${e.target.dataset.img}` : '';
              

            })
            row.addEventListener('mouseleave', (e) => {
                e.target.querySelector('.accion').innerHTML = '';
            })

        })




    })

 let table = document.querySelector('#table');
 let aside = document.querySelector('#aside');
 console.log(table.clientHeight)
 aside.style.height = table.clientHeight + 'px';






});

let menuButton = document.querySelector('#menuButton');
let aside = document.querySelector('#aside');
let collapse = false;
let asideUl = document.querySelector('#aside-ul');
menuButton.addEventListener('click',()=>{
    if(!collapse){
       
        aside.style.flexBasis = 0;
        aside.style.minWidth = 0;
        collapse = true;
    }else{
       
        aside.style.flexBasis = '20%';
        aside.style.minWidth = '200px';
        collapse = false;
    }
})
let form = document.querySelector('.new-car');
let boton = document.querySelector('#boton');
let spiner = document.querySelector('#spiner');
let textButton = document.querySelector('.sr-only');
let upload = document.querySelector('#upload');


form.addEventListener('submit', () => {
    boton.setAttribute('disabled', 'disabled'); // Deshabilitar el botón de envío
    upload.style.display = 'none';
    spiner.style.display = 'inline-block'
    textButton.textContent = 'Cargando..'
})
    








