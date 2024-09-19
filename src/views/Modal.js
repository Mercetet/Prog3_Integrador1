import { productoActivo, setproductoActivo } from "../../main";
import { handleSaveOrModifyElements, handleDeleteProduct } from "../services/Products";

const acceptButton = document.getElementById("accept_button");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
})


const cancelButton = document.getElementById("cancel_button");
cancelButton.addEventListener("click", () => {
    closeModal();
});

export const openModal = () => {
    const modal = document.getElementById("modal_popup");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("delete_button");
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre"), 
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categorias = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
        categorias.value = productoActivo.categorias;
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modal_popup");
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"), 
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categorias = document.getElementById("categoria");

    categorias.value = "Seleccione una categoria";
    imagen.value = "";
    precio.value = 0;
    nombre.value = "";
}

const deleteButton = document.getElementById("delete_button");
deleteButton.addEventListener("click", () => {
    handleButtonDelete();
})

const handleButtonDelete = () => {
    handleDeleteProduct();
}