let load = document.querySelector('#tr-load');
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
        fila.setAttribute('data-img', car.imagenes);
        let marca = car.Marca.charAt(0).toUpperCase() + car.Marca.slice(1);
        let modelo = car.Modelo.charAt(0).toUpperCase() + car.Modelo.slice(1);
        let year = car.año.charAt(0).toUpperCase() + car.año.slice(1);

        tbody.appendChild(fila);
        let td = ` 
    <td scope="row">${marca}</td>
    <td scope="row"> ${modelo} </td>
    <td scope="row" class="img-thumb"></td>
    <td scope="row"> ${year} </th>
    <td class="accion"></td>`;
        fila.innerHTML = td;
      let tdImg = fila.querySelector('.img-thumb');
        car.imagenes.forEach(img => {
            let ruta = ` ${img.substring(0,23)}thumb/thumb-${img.slice(23)}`;
            let imgSrc = document.createElement('img');
            imgSrc.setAttribute('src',ruta);
            tdImg.appendChild(imgSrc);
            
            
            console.log(ruta + '' + img)

            load.classList.add('d-none');
        })


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







}).catch(e => {
   
    
    spin.innerHTML = `<strong><i style="font-size: 30px;" class="ti ti-exclamation-circle mx-1 text-danger"></i><p style=margin:0 class="text-danger">No se pudo descargar la lista de autos, verifique conexion con la base de datos...</p></strong> <span id="er" class="d-none">(${e})</span>`;
    load.addEventListener('click',()=>{
        let er = document.querySelector('#er');
        er.classList.toggle('d-none');
    })


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
    

