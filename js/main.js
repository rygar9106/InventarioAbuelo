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
                <a href="./productos.html"><span class="text-muted">Productos</span></a><br>
                <a href="./movimientos.html"><span class="text-muted">Movimientos</span></a><br>
                <a href="./busqueda.html"><span class="text-muted">Busqueda</span></a>
            </li>
        </ul>
    </div>
</div>`;
};
window.onload = menu();
/* function fecha(){
    console.log(Date(Date.now()));
} */

function validarCategoria(){
    let a = document.forms["carga"]["categoria"].value;
    if (a === "" || a.trim().length === 0){
        document.getElementById("confirmationModal").innerHTML = `
        <div class="modal-dialog modal-sm">
            <div class="modal-content text-center">
                <div class="modal-header bg-danger text-white d-flex justify-content-center">
                    <h5 class="modal-title">La categoría está vacía</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-x-circle-fill text-danger" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>`
        document.getElementById("inputcategoria").value = "";
        return false;
    }else{
        document.getElementById("confirmationModal").innerHTML = `
        <div class="modal-dialog modal-sm">
            <div class="modal-content text-center">
                <div class="modal-header bg-success text-white d-flex justify-content-center">
                    <h5 class="modal-title">Se agrego la categoria</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar</button>
                </div>
            </div>
        </div>`
        document.getElementById("inputcategoria").value = "";
    }
}