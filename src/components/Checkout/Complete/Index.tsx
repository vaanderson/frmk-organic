import { Container } from '../../../styles/global'
import * as O from './Styles'

import SucessImg from '../../../assets/img/icons/success.svg';
import { useEffect, useState } from 'react';

export function OrderComplete(props: any) {
    const CartDetails = JSON.parse(props.cart)
    const userDetails = JSON.parse(props.details)
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        total();
    }, [CartDetails]);
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < CartDetails.length; i++) {
            totalVal += CartDetails[i].price * CartDetails[i].quantity;
        }
        setCartTotal(totalVal);
    };
    const cartOrder = CartDetails.map((data: any) => (
        <O.ProductBox>
            <O.ProductImg src={data.image} />
            <O.ProductTable>
                <O.ProductInfo>{data.product}</O.ProductInfo>
                <O.ProductInfo>{data.quantity}x R$ {data.price}</O.ProductInfo>
            </O.ProductTable>
        </O.ProductBox>
    ))
    return (
        <>
            <Container>
                <O.OrderBox>
                    <O.Card>
                        <O.IconBox>
                            <O.Icon src={SucessImg} alt="Sucesso Icone" />
                        </O.IconBox>
                        <O.CardTitle>Pagamento finalizado</O.CardTitle>
                        <O.CardSub>Obrigado pela preferência</O.CardSub>
                        <O.CardBody>
                            <O.ProductTable>
                                <O.CardBody>
                                    {cartOrder}
                                    <O.ProductTotal><O.ProductFormat>R$ </O.ProductFormat>{cartTotal}</O.ProductTotal>
                                    <O.Details>Detalhes de envio:</O.Details>
                                    <O.BoxDetails>
                                        <O.DetailsInfo><O.Bold>Nome:</O.Bold> {userDetails[0].nome + ' ' + userDetails[0].sobrenome} </O.DetailsInfo>
                                        <O.DetailsInfo><O.Bold>Endereço:</O.Bold> {userDetails[0].endereco + ',' + userDetails[0].numero + ',' + userDetails[0].bairro}</O.DetailsInfo>
                                        <O.DetailsInfo>{userDetails[0].cep + ' - ' + userDetails[0].cidade + ',' + userDetails[0].estado}</O.DetailsInfo>
                                    </O.BoxDetails>
                                </O.CardBody>
                            </O.ProductTable>
                        </O.CardBody>
                    </O.Card>
                </O.OrderBox>
            </Container>

        </>

        
    )

} 

   