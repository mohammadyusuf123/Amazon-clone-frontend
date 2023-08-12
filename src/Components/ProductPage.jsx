import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { callApi } from "./utils/callApi"
import { GB_CURRENCY } from "./utils/constant"
import ProductsDetails from "./ProductsDetails"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartSlice"


const ProductPage = () => {
  const {id}=useParams()
  // eslint-disable-next-line no-unused-vars
  const[product,setProduct]=useState(null)
  const[quantity,setQuantity]=useState("1")
  const dispatch=useDispatch()

  
const getProduct = () => { 
    callApi('../../public/data/products.json')
    .then((productResult)=>{
       setProduct(productResult[id])
    })
}
const handleQuantity = () => { 
  setProduct(product.quantity=quantity)
  return product;
 }
  useEffect(()=>{
     getProduct()
  },[])
  if(!product?.title) return<h2>Loading page....</h2>
  return ( product &&
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1200px] max-w-[1300px] m-auto p-4">
        <div className="grid h-[250px]  grid-cols-10 gap-2">
          <div className="col-span-3 p-8 rounded bg-white m-auto">
            <img src={`${product.image}`}/>
          </div>
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div className="mb-3">
              <ProductsDetails product={product} ratings={true} />
            </div>
            <div className="text-base xl:text-lg mt-3">
             {product.description}
            </div>
          </div>
          <div className="col-span-2 rounded  pt-2 pl-4 bg-white">
           <div className="text-xl xl:text-2xl text-red-700 font-semibold">{GB_CURRENCY.format(product.price)}</div>
           <div className="text-base xl:text-lg text-gray-500 pt-1 font-semibold">RRP:<span className="line-through">{GB_CURRENCY.format(product.oldPrice)}</span></div>
           <div className="text-sm xl:text-base text-blue-500 pt-1 font-semibold">FREE Returns</div>
           <div className="text-sm xl:text-base text-blue-500 pt-1 font-semibold">FREE Delivery</div>
           <div className="text-base xl:text-lg text-green- pt-1 font-semibold">In Stock</div>
           <div className="pt-1">
            Quantity:
            <select onChange={(e)=>setQuantity(e.target.value)} className="p-2 bg-white border rounded-md focus:border-indigo-700">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
           </div>
           <Link to='/checkout'>
           <button onClick={()=>dispatch(addToCart(handleQuantity()))} className="mt-3 bg-yellow-400 rounded px-7 py-2  text-gray-600 text-xs xl:text-sm hover:bg-yellow-500">Add to Cart</button>
           </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductPage