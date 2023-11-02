import { SearchContext } from './productContext';
import { useState } from 'react'
import { products } from '../data/product';

function SearchProvider(props){
  const [searchData,setSearchData]= useState([...products]);

  const searchHandler=(searchData)=>
  {
    const trimmed = searchData.trim();
    if (trimmed.length > 1) {
      const matched = products.filter((product) =>
        product.title.toLowerCase().includes(trimmed.toLowerCase())
      );
      setSearchData(matched);
    } else {
      setSearchData([...products]); // Reset to all products if search term is empty
    }
  }
  let myvalue={
    searchData,
    searchHandler,
  }
  return(
    <SearchContext.Provider value={myvalue}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;