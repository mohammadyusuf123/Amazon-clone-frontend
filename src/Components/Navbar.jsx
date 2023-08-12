/* eslint-disable react/no-unescaped-entities */
import logo from '../assets/images/amazon.png'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cart=useSelector((state)=>state.cart.productNumber)
  return (
    <header className="min-w-[1000px]">
        <div className="flex bg-amazonclone text-white h-[60px]">
          <div className="flex m-2 items-center m-4">
           <Link to='/'>
           <img className=' w-[80%] h-[35px]' src={logo}/>
           </Link>
            <div className=" pl-4 pr-4">
               <div className="text-xs xl:text-sm"> Deliver to</div>
               <div className="text-xs xl:text-base font-bold ">Bangladesh</div>
                
            </div>
          </div>
          <div className="flex grow relative items-center">
            <Search/>
          </div>
          <div className="flex items-center m-4">
          <div className=" pl-4 pr-4">
               <div className="text-xs xl:text-sm">Hello, sign in</div>
               <div className="text-xs xl:text-base font-bold ">Accounts & lists</div>
            </div>
            <div className=" pl-4 pr-4">
               <div className="text-xs xl:text-sm">Returns </div>
               <div className="text-xs xl:text-base font-bold ">& Orders</div>
            </div>
             <Link to='/checkout'>
             <div className="flex pr-3 pl-3">
              < ShoppingCartIcon className='h-[40px] '/>
             </div>
             </Link>
             <div className="relative">
              <div className="absolute -top-4 -left-9 text-x xl:text-sm font-bold text-yellow-500">
                {cart}
              </div>
             </div>
             <div className="text-xs xl:text-sm font-bold mt-4 -ml-4">
                Cart
             </div>
            
          </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
          <div className="">Today's Deal</div>
          <div className="">Customer Service</div>
          <div className="">Registry</div>
          <div className="">Gift Cards</div>
          <div className="">Sell</div>

        </div>
    </header>
  )
}

export default Navbar