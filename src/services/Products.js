import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStorage, handleRenderList } from "../views/store";
import { closeModal } from "../views/Modal";
import { productoActivo } from "../../main";
import Swal from "sweetalert2";


export const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value, 
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categorias = document.getElementById("categoria").value;
    let object = null;
    
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre, 
            imagen, 
            precio, 
            categorias,
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre, 
            imagen, 
            precio, 
            categorias,
        };
    }

    Swal.fire({
        title: "Correcto",
        text: "Producto guardado correctamente",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStorage();
    
    closeModal();
};



export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Desea eliminar elemento?",
        text: "Esta accion no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });


    
};