import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { getProductId } from '../../ApiService/api'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {

  const {id} = useParams();

  const [productDetails, setProductDetails] = useState({});

  useEffect(()=> {

    const fetchProductDetails = async()=> {

      const data =  await getProductId(id)
      setProductDetails(data)
    }

    fetchProductDetails()

  }, [id])


  const handleBuyNow =()=> {
    window.confirm("Successfully orderd the product!!")
  }



  return (
    <div className='Product-details-container'>
        <img src={productDetails.image} alt="" className='product-image' />

        <div className="product-info">
            <h2 className='product title'>{productDetails.title}</h2>
            <p className='product-description'>{productDetails.description}</p>

            <p className='product-price'>${productDetails.price}</p>

            <button className='buy-now-btn' onClick={handleBuyNow}>Buy Now</button>

            <Link to="/">
             <button className='go-back-home-btn'>Go Back Home</button>  
            </Link>
           
        </div>

    </div>
  )
}

export default ProductDetails