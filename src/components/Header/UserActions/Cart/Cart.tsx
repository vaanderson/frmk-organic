import * as C from './Styles';
import CartIconImg from '../../../../assets/img/icons/cart.svg'
import { Link } from 'react-router-dom';
import CartContext from '../../../../contexts/CartContext';
import { useContext, useEffect, useState } from 'react';
import CartChangeContext from '../../../../contexts/CartTotalContext';

export function CartResume(){
    const [cart, setCart] = useContext<any>(CartContext);
    const [cartChange, setcartChange] = useContext<any>(CartChangeContext);
    const [cartTotal, setCartTotal] = useState(0);

    

    useEffect(() => {
      total();
    }, [cart]);
  
    const total = () => {
      let totalVal = 0;

      for (let i = 0; i < cart.length; i++) {
          
        totalVal += parseFloat((cart[i].price));
            
      }
      
      setCartTotal(totalVal);
      setcartChange(totalVal);
    };





    return(
        <C.BoxAction>
            <C.CartIcon src={CartIconImg} />
            <Link to="/Carrinho">
            <C.TitleCall>
                <C.GreenLetter>Carrinho</C.GreenLetter>
                <C.Space/>
                <C.Bold>R$ {cartTotal.toFixed(2)}</C.Bold>
            </C.TitleCall>
            </Link>
        </C.BoxAction>
    )   
} 