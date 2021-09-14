import  { useContext } from "react"
import { Banner } from "../components/Banner/Index";
import { CallToAction } from "../components/CallToAction/Index";
import { Categories } from "../components/Categories/Index";
import { Footer } from "../components/Footer/Index";
import { Header } from "../components/Header/Index";
import { ProductList } from "../components/ProductList/Index";
import SearchContext from "../contexts/SearchContext";



function Home(){
    const [keywordsSearch] = useContext<any>(SearchContext);

    if(keywordsSearch){
        console.log(keywordsSearch)
        return(
            <>
                <Header/>              
                <ProductList/>
                <Footer/>
            </>
        )
    } 
    return(
        <>
            <Header/>
            <Banner/>
            <CallToAction/>
            <Categories/>
            <ProductList/>
            <Footer/>
        </>
    ) 
    
}
export default Home;