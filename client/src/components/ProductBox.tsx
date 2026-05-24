import type { ProductType } from "../types/ProductType"

type Props = {
    data: ProductType
}



const ProductBox = ({data} : Props) => {
  return ( 
        <div className="flex flex-col max-w-52 component rounded-md">
            <div className="block w-full h-full overflow-hidden aspect-video ">
                <img alt={data.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-center" src={data.imageUrl}/>
            </div>
            <div className="flex flex-col p-4">
                <span>{data.name}</span>
                <span className="text-teal-500">${data.price}</span>
                <span className="text-gray-400 text-sm">stock :{data.stock}</span>
            </div>
        </div>
  )
}

export default ProductBox