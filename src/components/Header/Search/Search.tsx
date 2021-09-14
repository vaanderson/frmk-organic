import React, { useContext  } from 'react';
import { useHistory  } from 'react-router';

import SearchContext from '../../../contexts/SearchContext';

import * as S from './Styles';
import SearchIconImg from '../../../assets/img/icons/search.svg';

export function Search({callback}:{callback: (keywords:string)=>void}){

    const [keywordsSearch, setKeywordsSearch] = useContext<any>(SearchContext);
    const history = useHistory();

    const handleSubmit = (event:any) =>{
        callback(keywordsSearch)
        event.preventDefault(); 
        setKeywordsSearch(keywordsSearch);
        history.push("/")
    }
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      let ValueVerified = event.target.value
      setKeywordsSearch(ValueVerified);
      
    }
    return(
        <S.SearchBox onSubmit={(event)=>{handleSubmit(event)}}>
          <S.SearchInput onChange={(event)=>handleChange(event)} type="text" placeholder="O que você está procurando?" />
         <S.SearchButton> <S.SearchIcon src={SearchIconImg}/></S.SearchButton>
        </S.SearchBox>
    )
} 