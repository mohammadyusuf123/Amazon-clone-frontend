import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductsDetails from "./ProductsDetails"
import { GB_CURRENCY } from "./utils/constant"
import { decrementInCart, incrementInCart, removeFromCart } from "../Redux/cartSlice"



const Checkout = () => {
  const products=useSelector((state=>state.cart.products))
  const productNumber=useSelector((state=>state.cart.productNumber))
  const subTotal=useSelector((state)=>state.cart.products.reduce((subTotal,product)=>subTotal+(product.price*product.quantity),0));
  const dispatch=useDispatch()

  
  return (
    <div className="h-screen bg-amazonclone-background ">
      <div className="max-h-[1000px] max-w[1500px]  m-auto pt-5 ">
        <div className="grid grid-cols-8 gap-10 ">
          {/* product */}
          <div className="col-span-6 bg-white ">
            <div className="text-xl xl:text-2xl m-4">Shopping cart
            {
              products.map((product)=>(
                <div key={product.id} className="">
                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                  <div className="col-span-10 grid grid-cols-8 ">
                    <div className="col-span-2">
                     <Link to={`product/${product.id}`}>
                      <img src={product.image_small} alt=""  className="p-4 m-auto " />
                     </Link>
                    </div>
                    <div className="col-span-6">
                     <div className="font-medium text-black mt-2">
                      <Link to={`product/${product.id}`}>
                      <ProductsDetails product={product} ratings={false} />
                      </Link>
                     </div>
                     
                     <div className=" grid grid-cols-3 pt-2 w-20 text-center ">
                      <div className=" text-xl xl:text-2xl bg-slate-500 rounded cursor-pointer text-white"><span onClick={()=>dispatch(incrementInCart(product.id))}>+</span></div>
                      <div className="text-xs xl:text-xl">{product.quantity}</div>
                      <div className="text-xl xl:text-2xl bg-slate-500 rounded cursor-pointer text-white"><span onClick={()=>dispatch(decrementInCart(product.id))}>-</span></div>
                     </div>
                     <div className="">
                      <button onClick={()=>dispatch(removeFromCart(product.id))} className=" text-base xl:text-l  text-blue-500">Delate</button>
                     </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                   <div className="text-base xl:lg font-semibold mt-2 pr-4">
                    {
                      GB_CURRENCY.format(product.price)
                    }
                   </div>
                  </div>
                 
                </div>
                </div>
              ))
            }
             <div className=" text-xs xl:text-l pr-10 mb-4 text-right">Subtotal({productNumber}items): <span className="font-semibold">{
              GB_CURRENCY.format(subTotal)
              }</span></div>
            </div>
            </div>
           {/* Checkout */}
        <div className="col-span-2 bg-white rounded h-[250px] pl-5 pt-4 ">
          <div className="text-xs xl:text-sm text-green-400">Your product is qualify for <span className="font-bold">FREE DELIVERY</span> Delivery details</div>
          <div className=" text-xs xl:text-l pr-10 mt-5 text-center pb-2">Subtotal({productNumber}items): <span className="font-semibold">{
              GB_CURRENCY.format(subTotal)
              }</span></div>
        <div className="flex items-center justify-center pr-8">
        <button className="btn">Proceed to checkout</button>
        </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout