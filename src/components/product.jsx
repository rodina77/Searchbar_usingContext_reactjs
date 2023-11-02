import React, { useContext } from 'react';
import { SearchContext } from '../context/productContext';

const Product = () => {
  const {searchData}= useContext(SearchContext)
  return (
    <div className='container'>
      {searchData.map((product)=>{
        return(
          <>
          <ul key={product.id}>
              <li>{product.title}</li>
            </ul>
            </>
        )
      })}
    </div>
  );
}

export default Product;
