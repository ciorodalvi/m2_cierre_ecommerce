$(".btn-eliminar").click(function () {
    let confirmacion = confirm("Está seguro que desea eliminar el producto");

    if (confirmacion){
        alert("Producto eliminado correctamente");
    }

})