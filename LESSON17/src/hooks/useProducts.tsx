import { useContext } from "react";
import ProductsContext , { UseProductContextType } from "../context/ProductProvider";

const useProducts = (): UseProductContextType => {
    return useContext(ProductsContext);
}

export default useProducts;