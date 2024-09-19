import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStorage } from "./src/views/store";
import "/style.css";
import { openModal } from "./src/views/Modal";
import { handleSearchProductByName } from "./src/services/searchBar";


export let categoriaActiva = null;
export const setCatgoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};



renderCategories();

handleGetProductsToStorage();
renderCategories();

//HEADER

const buttonAdd = document.getElementById("button_add_element");

buttonAdd.addEventListener("click", () => {
    openModal();
});

//BOTON BUSQUEDA
const buttonSearch = document.getElementById("button_search");

buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
     
}); 