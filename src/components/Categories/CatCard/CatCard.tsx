import * as C from './Styles';
import { Column } from '../../../styles/global';

export function CatCard(props : any){
    return(
     
    <Column>
       <C.Category style={{backgroundColor : props.CategoryPrimaryColor}}>
            <C.Info>
                <C.CatName style={{color : props.CategorySecondaryColor}}>{props.CategoryName}</C.CatName>
                <C.LinkFollow style={{color : props.CategorySecondaryColor}}>veja mais</C.LinkFollow>
           </C.Info>
            <C.CatImg src={process.env.PUBLIC_URL + '/images/categories/' + props.CategorySlug + '.png'}/>
       </C.Category>
    </Column>
   
    )
}