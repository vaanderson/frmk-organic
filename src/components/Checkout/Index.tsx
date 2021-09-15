import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { Container } from "../../styles/global";
import { OrderComplete } from "./Complete/Index";
import * as C from './Styles'

export function CheckoutForm(){
    const [cart, setCart] = useContext<any>(CartContext);
    const [userData, setUserData] = useState<any>([])
    const [isFinished, setisFinished] = useState(false)
    const [cartCopy, setCartCopy] = useState(cart)

    function handleSubmit(event : any) {
        event.preventDefault();
            const data = [
                {
                    nome: event.target.elements.nome.value,
                    sobrenome: event.target.elements.sobrenome.value,
                    cep: event.target.elements.cep.value,
                    endereco: event.target.elements.endereco.value,
                    numero: event.target.elements.numero.value,
                    bairro: event.target.elements.bairro.value,
                    complemento: event.target.elements.complemento.value,
                    cidade: event.target.elements.cidade.value,
                    estado: event.target.elements.estado.value,
                    pais: event.target.elements.pais.value,
                }
            ]
           setUserData(data);
           setisFinished(true);
           setCart([]);
    }

    function handleClick(){
        setisFinished(false)
    }


    return(
        
        <>
        { !isFinished && 
            <>
            <Container>
                <C.Title>Finalizar Compra</C.Title>
            </Container>

            <Container>
                <C.CheckoutForm onSubmit={handleSubmit}>
                <C.TitleForm>Dados pessoais</C.TitleForm>
                    <C.FormRow>
                
                        <C.InputGroup>
                            <C.Label>Nome</C.Label>
                            <C.Input name="nome" placeholder="Nome"/>
                            </C.InputGroup>
                           <C.InputGroup>
                            <C.Label>Sobrenome</C.Label>
                            <C.Input name="sobrenome" placeholder="Sobrenome"/>
                            </C.InputGroup>
                       
                    </C.FormRow>
                    
                    <C.TitleForm>Endereço de Entrega</C.TitleForm>
                    <C.FormRow>
                        <C.InputGroup>
                            <C.Label>CEP</C.Label>
                            <C.Input name="cep" placeholder="CEP"/>
                        </C.InputGroup>

                        </C.FormRow>

                    <C.FormRow>
                        <C.InputGroup>
                            <C.Label>Endereço</C.Label>
                            <C.Input name="endereco" placeholder="Endereço"/>
                        </C.InputGroup>
                        <C.InputGroup>
                            <C.Label>Número</C.Label>
                            <C.Input name="numero" placeholder="Número"/>
                        </C.InputGroup>
                    </C.FormRow>

                    <C.FormRow>
                   
                        <C.InputGroup>
                            <C.Label>Complemento</C.Label>
                            <C.Input name="complemento" placeholder="Complemento"/>
                        </C.InputGroup>

                         <C.InputGroup>
                            <C.Label>Bairro</C.Label>
                            <C.Input name="bairro" placeholder="Bairro"/>
                        </C.InputGroup>        
                    </C.FormRow>

                    <C.FormRow>
                        <C.InputGroup>
                            <C.Label>Cidade</C.Label>
                            <C.Input name="cidade" placeholder="Cidade"/>
                        </C.InputGroup>

                        <C.InputGroup>
                            <C.Label>Estado</C.Label>
                            <C.Input name="estado" placeholder="estado"/>
                        </C.InputGroup>

                        <C.InputGroup>
                            <C.Label>País</C.Label>
                            <C.Input name="pais" placeholder="Pais"/>
                        </C.InputGroup>
                    </C.FormRow>
                    
                    <C.ButtonCheckout type="submit">Finalizar Compra</C.ButtonCheckout>
                </C.CheckoutForm>
            </Container>
            </>
    }
            {isFinished && 
                <>
                 <Container>
                 </Container>
                 
                 <OrderComplete details = {JSON.stringify(userData)} cart = {JSON.stringify(cartCopy)}/>
                
                 <Container>
                    <C.ButtonBox>
                        <C.ButtonContent>
                            <Link to="/"> <C.ButtonAction onClick={handleClick} >Continuar Comprando</C.ButtonAction></Link>
                          
                        </C.ButtonContent>

                        <C.ButtonContent>
                           
                            <Link to="#"> <C.ButtonAction>Salvar PDF do Pedido</C.ButtonAction></Link>
                        </C.ButtonContent>
                    </C.ButtonBox>
           
                </Container>
             </>
            }
        </>

    )

}