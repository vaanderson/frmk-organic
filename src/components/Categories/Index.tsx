import { ContainerGrid } from "../../styles/global";
import { CatCard } from "./CatCard/CatCard";
import Slider from "react-slick";
import { DataCategories } from "../../utils/Categories";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Categories() {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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



  return (
    <ContainerGrid>
      <Slider {...settings}>
        {DataCategories.map(data => {
          return (
            <CatCard key={data.category_id} CategoryName={data.name} CategorySlug={data.slug} CategoryPrimaryColor={data.primary_color} CategorySecondaryColor={data.secondary_color} />
          )
        })}
      </Slider>
    </ContainerGrid>
  )
}