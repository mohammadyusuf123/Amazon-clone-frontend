import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { callApi } from "./utils/callApi"
import { GB_CURRENCY } from "./utils/constant"
import ProductsDetails from "./ProductsDetails"

const SearchResult = () => {
  const [searchParams]=useSearchParams()
  const [products,setProducts]=useState(null)

  const handleSearchResult = () => { 
    const search=searchParams.get("search");
    const category=searchParams.get("category");
   callApi('../../public/data/search.json')
   .then((searchResult)=>{
      const categoryResult=searchResult[category]
      if (search) {
      const result=categoryResult.filter((product)=>product.title.toLowerCase().includes(
        search.toLowerCase()));
        setProducts(result)
      } else {
        setProducts(categoryResult)
      }
   }
  )}

  useEffect(()=>{
    handleSearchResult()
  },[searchParams])
  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
    {products &&
      products.map((product, key) => {
        return (
          <Link key={key} to={`/product/${product.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 ">
              <div className="col-span-2 p-4 bg-gray-200">
                <img
                  className="m-auto"
                  src={product.image_small}
                  alt="Search result product"
                />
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100 ">
                <div className="font-medium text-black p-2">
                  <ProductsDetails product={product} ratings={true} />
                  <div className="text-xl xl:text-2xl pt-1">
                    {GB_CURRENCY.format(product.price)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
  </div>
  )
}

export default SearchResult