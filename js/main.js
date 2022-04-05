function menu(){
    document.getElementById('menu').innerHTML = `<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
<div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a href="#"><h5 class="text-white h4">Cerrar sesión</h5></a>
                <a href="./categorias.html"><span class="text-muted">Categorias</span></a><br>
                <a href=".productos.html"><span class="text-muted">Productos</span></a><br>
                <a href="./movimientos.html"><span class="text-muted">Movimientos</span></a><br>
                <a href="./busqueda.html"><span class="text-muted">Busqueda</span></a>
            </li>
        </ul>
    </div>
</div>`;
};
window.onload = menu();