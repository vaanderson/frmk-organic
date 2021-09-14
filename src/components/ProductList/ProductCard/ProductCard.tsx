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
        let cartCopy = [...cart];
     
        const objIndex = cartCopy.findIndex((obj: any) => obj.sku === data.sku);


        if(objIndex >= 0){
            // cartCopy[objIndex].quantity++;
            console.log(cartCopy[objIndex].quantity++)   ;
            setCart(cartCopy)
        } else {
            setCart([...cartCopy, data]);
        }

        
        




        // for(var i=0; i<cartCopy.length; i++) {
        //     if(cartCopy[i].sku === data.sku) {
        //         alert('Produtos iguais')
        //     }
        // }
        
    
       
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

