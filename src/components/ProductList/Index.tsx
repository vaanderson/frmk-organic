import { useContext } from "react";
import Slider from "react-slick";
import SearchContext from "../../contexts/SearchContext";
import { Container, ContainerGrid, Row, TitleSection } from "../../styles/global";
import { DataProducts } from "../../utils/Products";

import { ProductCard } from "./ProductCard/ProductCard";

export function ProductList(){

  const [keywordsSearch, setKeywordsSearch] = useContext<any>(SearchContext);

    const settingsProduct = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rows: 2,
		    arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
            <>
        <Container>
            <Row>
               <TitleSection>
                {!keywordsSearch &&  'Faça a sua feira online:' }
                {keywordsSearch &&  'Resultado da pesquisa:' }
              </TitleSection>
            </Row>
        </Container>

        <ContainerGrid>
          <Slider {...settingsProduct}>

          {DataProducts.filter((data)=>{
            if(keywordsSearch == ""){
              return(
                <ProductCard key={data.sku} sku={data.sku} product={data.product} quantity={1} image={data.image} price={data.price}/>
              )
            }
            else if(data.product.toLowerCase().includes(keywordsSearch.toLowerCase())){
              return(
                <ProductCard key={data.sku} sku={data.sku} product={data.product} quantity={1} image={data.image} price={data.price}/>
              )
            }
          }).map((data,key)=>{
            return(
              <ProductCard key={data.sku} sku={data.sku} product={data.product} quantity={1} image={data.image} price={data.price}/>
             )
          })}

          </Slider>
        </ContainerGrid>
        </>

    )
}