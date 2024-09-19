import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./Modal";
import { setproductoActivo } from "../../main";

export const handleGetProductsToStorage = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}

export const handleRenderList = (productosIn) => {
    const burguers = productosIn.filter((el) => el.categorias === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categorias === "Papas");
    const gaseosas = productosIn.filter((el) => el.categorias === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        console.log(productos);
        if(productos.length > 0){
            const productosHTML = productos.map((producto, index) => {
                return`
                <div class='container_target_item' id = "product-${producto.categorias}-${index}">
                    <div>
                        <img src='${producto.imagen}'>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class = "target_props">
                            <p><b>Precio: </b>$${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            });
            return `
            <section class = "section_store">
                <div class = "container_title_section">
                    <h3>${title}</h3>
                </div>
                <div class = "container_product_store">
                    ${productosHTML.join("")}
                </div>
            </section>
            `;
        }else{
            return "";
        }
    };

    const appContainer = document.getElementById("store_container");

    appContainer.innerHTML = `
        ${renderProductGroup(burguers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        if(productsIn){
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categorias}-${index}`);
                productContainer.addEventListener("click", () => {
                    setproductoActivo(element);
                    openModal();
                });
            });
        }
    };

    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};



