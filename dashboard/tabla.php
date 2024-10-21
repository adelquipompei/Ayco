<style>
    /* From Uiverse.io by barisdogansutcu */ 
svg {
 width: 3.25em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
}

circle {
 fill: none;
 stroke:hsl(201, 61%, 25%) ;
 stroke-width: 3;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}

</style>
<table id='table' class="table table-striped table-hover">
    <thead>
        <tr>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Foto</th>
            <th scope="col">año</th>
            <th>Acción</th>
        </tr>
    </thead>


    <tbody class="spinner" id="tbody">
        <tr id="tr-load" style="height:68.8px;cursor:pointer;">
            <td id="cargando-api-td" colspan="5" class="text-center align-middle">
                <div id="spin" class="">
                    <svg viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                    </svg>
                </div>
            </td>
        </tr>
    </tbody>


</table>