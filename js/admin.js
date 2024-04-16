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
                confirm(`Desea Eliminar ${e.target.dataset.marca} ${e.target.dataset.modelo} Modelo: ${e.target.dataset.year}? `) ? window.location.href = `../php/delete.php?id=${e.target.dataset.id}` : '';

            })
            row.addEventListener('mouseleave', (e) => {
                e.target.querySelector('.accion').innerHTML = '';
            })

        })




    })






});

let menuButton = document.querySelector('#menuButton');
let aside = document.querySelector('#aside');
let collapse = false;
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









