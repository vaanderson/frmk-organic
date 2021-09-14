import  { createContext, useContext } from "react";
import { DataProducts } from "../utils/Products";


const CartContext = createContext([[], () => {}]);
 



export default CartContext;