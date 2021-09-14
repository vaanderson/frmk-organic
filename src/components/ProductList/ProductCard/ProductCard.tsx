import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import { Column } from "../../../styles/global";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as P from "./Style";


export function ProductCard(props:any){
    const Image = 'maca.png';
    const [cart, setCart] = useContext<any>(CartContext);  

   
  
   
      const addToCart = (data : any) => {  
          
        //Posição Array
        const FilterArray = cart.map(function(e : any) { return e.sku; }).indexOf(data.sku);

        console.log(FilterArray)

        //  verificar array 
        setCart([...cart, data]);

        // if(cart){
        //     toast.success("Produto adicionado no carrinho")
        // }

        // console.log(cart)
    };


    return(
        <Column>
            <P.ProductBox>
                <P.ProductImage src={process.env.PUBLIC_URL + '/images/products/' + Image }/>
                <P.ProductInfo>
                    <P.ProductName>{props.product}</P.ProductName>
                    <P.ProductPrice>{props.price}  -  1KG</P.ProductPrice>
                </P.ProductInfo>

                <P.ProductCartBtn onClick={() => addToCart(props)}>Adicionar no carrinho</P.ProductCartBtn>
            </P.ProductBox>  
        </Column>
    )
}

