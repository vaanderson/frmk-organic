import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { Container, TitleSection } from "../../styles/global";
import * as C from "./Styles";


export function CartList(){
    const [cart, setCart] = useContext<any>(CartContext);
    const [Quantity, setQuantity] = useState(1);

    const minusQuantity = () => {
        if (Quantity > 0) {
            setQuantity(Quantity - 1);
        } 
    };
    const plusQuantity = () => {
        setQuantity(Quantity + 1);
    };
    const removeFromCart = (data : any) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.sku !== data.sku);
        setCart(hardCopy);
      };
    const amountOfItems = (id : any) => cart.filter((item: any) => item.sku === id).length;
    const cartItems = cart.map((data : any) => (    
        <C.ListRow key={data.sku}>
        <C.ListItem>
            <C.ProductImg src="https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-1024-1024.jpg"/>
            <C.CartInfoProd> 
                <C.CartProductName>{data.product} </C.CartProductName>
                <C.CartProductPrice>x R$ {data.price} kg </C.CartProductPrice>
            </C.CartInfoProd>   
        </C.ListItem>
        <C.ListItem>
                <C.QuantityBox>
                    <C.QuantityMinus onClick={minusQuantity} aria-hidden="true">-</C.QuantityMinus>
                    <C.CartQuantity  type="number" min="1" max="10" step="1" defaultValue={Quantity}/>
                    <C.QuantityPlus onClick={plusQuantity} aria-hidden="true">+</C.QuantityPlus>    
                </C.QuantityBox>    
        </C.ListItem>
        <C.ListItem>R$ {amountOfItems(data.sku) * data.price}</C.ListItem>
        <C.ListItem><C.CartActionButton onClick={() => removeFromCart(data)}>Remover</C.CartActionButton></C.ListItem>
    </C.ListRow>

    ));
    return(
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

                    { cartItems }
                </C.ListContainer>
            </Container>
        </C.CartBox>
    )
}