import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { Container, TitleSection } from "../../styles/global";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as C from "./Styles";
import { Link } from "react-router-dom";


export function CartList() {
    const [cart, setCart] = useContext<any>(CartContext);
    const [cartTotal, setCartTotal] = useState(0);

    const minusQuantity = (data: any) => {
        let cartCopy = [...cart];
        const objIndex = cartCopy.findIndex((obj: any) => obj.sku === data.sku);
        if (objIndex >= 0) {
            const newObject = { ...cartCopy[objIndex], quantity: cartCopy[objIndex].quantity - 1 };
            cartCopy.splice(objIndex, 1, newObject)
            setCart(cartCopy)
        } else {
            setCart([...cartCopy, data]);
        }
    };

    const plusQuantity = (data: any) => {
        let cartCopy = [...cart];
        const objIndex = cartCopy.findIndex((obj: any) => obj.sku === data.sku);
        if (objIndex >= 0) {
            const newObject = { ...cartCopy[objIndex], quantity: cartCopy[objIndex].quantity + 1 };
            cartCopy.splice(objIndex, 1, newObject)
            setCart(cartCopy)
        } else {
            setCart([...cartCopy, data]);
        }
    };

    const removeFromCart = (data: any) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.sku !== data.sku);
        setCart(hardCopy);
        if (cart) {
            toast.error("Produto removido do carrinho.")
        }
    };

    useEffect(() => {
        total();
    }, [cart]);
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price * cart[i].quantity;
        }
        setCartTotal(totalVal);
    };

    const cartItems =
        cart.map((data: any) => (
            <C.ListRow key={data.sku}>
                <C.ListItem>
                    <C.ProductImg src={data.image} />
                    <C.CartInfoProd>
                        <C.CartProductName>{data.product} </C.CartProductName>
                        <C.CartProductPrice>x R$ {data.price} kg </C.CartProductPrice>
                    </C.CartInfoProd>
                </C.ListItem>
                <C.ListItem>
                    <C.QuantityBox>
                        <C.QuantityMinus onClick={() => minusQuantity(data)} aria-hidden="true">-</C.QuantityMinus>
                        <C.CartQuantity type="number" min="1" max="10" step="1" value={data.quantity} defaultValue={data.quantity} />
                        <C.QuantityPlus onClick={() => plusQuantity(data)} aria-hidden="true">+</C.QuantityPlus>
                    </C.QuantityBox>
                </C.ListItem>
                <C.ListItem>R$ {(data.quantity * data.price).toFixed(2)}</C.ListItem>
                <C.ListItem><C.CartActionButton onClick={() => removeFromCart(data)}>Remover</C.CartActionButton></C.ListItem>
            </C.ListRow>
        ))
    return (
        <C.CartBox>
            <Container>
                <TitleSection >Carrinho de compras</TitleSection>
            </Container>
            <Container>
                <C.ListContainer>
                    <C.ListRow>
                        <C.ListItem>Produto</C.ListItem>
                        <C.ListItem>Quantidade</C.ListItem>
                        <C.ListItem>Total</C.ListItem>
                        <C.ListItem>Ação</C.ListItem>
                    </C.ListRow>
                    {cart.length <= 0 &&
                        <C.ListRow><C.ListItem>Carrinho vazio</C.ListItem></C.ListRow>
                    }
                    {cart && cartItems}

                </C.ListContainer>
                {cart.length > 0 &&
                    <C.CartFooter>
                        <C.CartContent>
                            <C.CarTotal>Total: <C.TotalSpan>R$ {cartTotal.toFixed(2)}</C.TotalSpan> </C.CarTotal>
                            <Link to="/Checkout"> <C.ButtonCheckout> Finalizar compra </C.ButtonCheckout> </Link>
                        </C.CartContent>
                    </C.CartFooter>
                }
            </Container>
        </C.CartBox>
    )
}