<?php
$page = $_GET['page'];





?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="..\css\admin.css?10">
    <link rel="stylesheet" href="..\node_modules\@tabler\icons-webfont\dist\tabler-icons.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <title>Panel De Usuario</title>
</head>

<body>
    <nav>
        <div class="brand">
            <div class="logo"></div>
            <h2 class="mx-2">Ayco</h2>
            <button id="menuButton">
                <i class="ti ti-menu-2"></i>
            </button>
        </div>
        <div class="user">
            <i class="ti ti-user-filled"></i>
            <span class="name-user">NombreUser</span>
        </div>
    </nav>
    <main class="contenedor">
        <aside id="aside">
            <ul id="aside-ul">
                <li><a class="link-aside" href="index.php?page=new"><i class="ti ti-layout-grid-add"></i>Agregar Auto</a></li>
                <hr>
                <li><a class="link-aside" href="index.php?page=tabla"><i class="ti ti-database"></i>Administrar Autos</a></li>
                <hr>
                <li><a class="link-aside" href=""><i class="ti ti-logout-2"></i>Cerrar Sesión</a></li>
            </ul>
        </aside>
        <section class="no-aside">


            <?php
            switch ($page) {
                case 'tabla':
                    include "tabla.php";
                    break;
                case 'new':
                    include "input-car.html";   
            }


            ?>


            <footer></footer>
        </section>














    </main>






















</body>
<script src="..\js\admin.js?112"></script>
</html>