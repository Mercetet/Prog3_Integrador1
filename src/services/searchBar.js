import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("input_header");
    const products = handleGetProductLocalStorage();

    const result = products.filter((el) => 
        el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())
    );
    
    handleRenderList(result);
};