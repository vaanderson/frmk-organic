import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import { Column } from "../../../styles/global";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as P from "./Style";


export function ProductCard(props: any) {
    const Image = 'maca.png';
    const [cart, setCart] = useContext<any>(CartContext);

    const addToCart = (data: any) => {
        let cartCopy = [...cart];

        const objIndex = cartCopy.findIndex((obj: any) => obj.sku === data.sku);

        if (objIndex >= 0) {
            const newObject = { ...cartCopy[objIndex], quantity: cartCopy[objIndex].quantity + 1 };

            console.log(cartCopy[objIndex].quantity)
            // cartCopy[objIndex].quantity++;
            cartCopy.splice(objIndex, 1, newObject)
            console.log(cartCopy);
            setCart(cartCopy)
            toast.warning("O produto já está no carrinho, foi adicionado mais uma quantidade.")
        } else {
            setCart([...cartCopy, data]);
            toast.success("Produto adicionado no carrinho")
        }

    };

    return (
        <Column>
            <P.ProductBox>
                <P.ProductImage src={props.image} />
                <P.ProductInfo>
                    <P.ProductName>{props.product}</P.ProductName>
                    <P.ProductPrice>{props.price}  -  1KG</P.ProductPrice>
                </P.ProductInfo>

                <P.ProductCartBtn onClick={() => addToCart(props)}>Adicionar no carrinho</P.ProductCartBtn>
            </P.ProductBox>
        </Column>
    )
}