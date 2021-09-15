import { useContext, useEffect, useState } from "react";
import SearchContext from "../../contexts/SearchContext";
import { api } from "../../services/api";
import { Container, Row, TitleSection } from "../../styles/global";

import { ProductCard } from "./ProductCard/ProductCard";

export function ProductList() {

  const [keywordsSearch] = useContext<any>(SearchContext);
  const [FilterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    api.get('products')
      .then(response => {
        setFilterProduct(response.data)
      })
  }, [])

  const filterFunction = (data: any) => {
    return data.product.toUpperCase().indexOf(keywordsSearch.toUpperCase()) > -1
  }

  return (
    <>
      <Container>
        <Row>
          <TitleSection>
            {!keywordsSearch && 'Faça a sua feira online:'}
            {keywordsSearch && 'Resultado da pesquisa:'}
          </TitleSection>
        </Row>
      </Container>
      <Container>
        {
          FilterProduct.filter(filterFunction).map((data: any) => (
            <ProductCard key={data.sku} sku={data.sku} product={data.product} quantity={1} image={data.image} price={data.price} />
          ))
        }
      </Container>
    </>
  )
}