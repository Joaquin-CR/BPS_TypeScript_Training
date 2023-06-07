import { ReactElement } from "react"
import { ReducerAction, ReducerActionType } from "../context/CartProvider"
import { ProductType } from "../context/ProductProvider"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTION: ReducerActionType,
    inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTION, inCart }: PropsType): ReactElement => {

    const img: string = new URL(`../assets/images/${product.sku}.jpg`, import.meta.url).href;

    const onAddToCart = () => dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });

    const itemInCart = inCart ? 'Item in cart' : null;

    const content = (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product_img"/>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(product.price)}{itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    )

    return content;
}

export default Product