import { X } from 'lucide-react';
import { useState } from 'react';
import type { ProductType } from '../../types/ProductType';
import { usePopUpStore } from '../../stores/popUpStore';

const NewProductForm = () => {
    const [formData, setFormData] = useState<ProductType>({id: 0, name: '', category: 'All Categories', price: 0,  cost: 0, stock: 0, imageUrl: ''})

    // using store
    const { toggleNewProductFrom } = usePopUpStore();

    // handler function
    const changeFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;


        // file input
        if (e.target instanceof HTMLInputElement && e.target.files) {

            const file = e.target.files[0];

            if (!file) return;

            setFormData(prev => ({
                ...prev,
                imageBlob: file,
                imageUrl: URL.createObjectURL(file)
            }));

            console.log(file)

            return;
        }

        // only for numeric fields
        if (name === "stock" || name === "price") {

            // allow empty
            if (value === "") {
                setFormData(prev => ({
                    ...prev,
                    [name]: ""
                }));
                return;
            }

            // only positive integers
            if (!/^[1-9]\d*$/.test(value)) {
                return;
            }
        }
            
         setFormData(prev => {
            return {...prev, [name]: value}
         })
    }

    return (
        // background black screen to cover the whole screen
        <div className="fixed z-50 inset-0 w-full h-dvh flex justify-center items-center bg-black/40">
            {/* Popup Component Here */}
            <div className="component h-fit flex flex-col gap-4 rounded-md text-sm main-container overflow-y-auto">
                <div className='max-h-150 text-gray-400'>
                    <div className="flex justify-between gap-2 mini-component p-4">
                        <span>Add Product</span>
                        <button onClick={toggleNewProductFrom} className=' hover:text-white'><X size={15}/></button>
                    </div>
                    <form className='mini-component p-4 flex flex-col gap-4'>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <span className=' self-start'>Pick Image</span>
                            <div className=" max-w-100 overflow-hidden w-full flex justify-center items-center">
                                {/* Add Image Here */}
                                {formData.imageUrl == "" ?
                                    
                                    <input 
                                        type='file' 
                                        accept="image/jpg,image/webp,image/jpeg" 
                                        value={formData.imageUrl} 
                                        name='imageUrl'
                                        onChange={changeFormData}
                                        required
                                        className='p-1 mini-component border rounded-md w-full'
                                    />
                                    :
                                    <div className='relative group'>
                                        <img 
                                            src={formData.imageUrl}
                                            className='rounded-md max-h-60 object-cover'
                                        />

                                        <label className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center cursor-pointer transition'>
                                            Change Image

                                            <input
                                                type='file'
                                                accept='image/jpg,image/jpeg,image/webp'
                                                name='imageUrl'
                                                onChange={changeFormData}
                                                className='hidden'
                                            />
                                        </label>
                                    </div>

                                    
                                }
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className='flex flex-col'>
                                <label htmlFor="product-name">Product Name *</label>
                                <input 
                                    id="product-name" 
                                    type="text"  
                                    value={formData.name} 
                                    name='name'
                                    onChange={changeFormData}
                                    required  
                                    className=' p-1 border mini-component rounded-md outline-none'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="product-category">Category *</label>
                                <select 
                                    id='product-category' 
                                    name="category"  
                                    value={formData.category} 
                                    onChange={changeFormData}
                                    className="outline-none mini-component border p-1 rounded-md w-full">

                                    <option>All Categories</option>
                                    <option>Beverages</option>
                                    <option>Snacks</option>
                                    <option>Food</option>
                                    <option>Dairy</option>
                                    <option>Personal Care</option>
                                    <option>Cleaning</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="product-price">Selling Price *</label>
                                <input 
                                    id="product-price" 
                                    type="number" 
                                    value={formData.price == 0 ? "" : formData.price} 
                                    name='price'
                                    onKeyDown={(e) => {
                                        // block: -, +, e, E
                                        if (['-', '+', 'e', 'E'].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onChange={changeFormData}
                                    required 
                                    className=' p-1 border mini-component rounded-md outline-none'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="product-cost">Cost Price  *</label>
                                <input 
                                    id="product-cost" 
                                    type="text" 
                                    value={formData.cost == 0 ? "" : formData.cost} 
                                    name='cost'
                                    onKeyDown={(e) => {
                                        // block: -, +, e, E
                                        if (['-', '+', 'e', 'E'].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onChange={changeFormData}
                                    required  
                                    className=' p-1 border mini-component rounded-md outline-none'/>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="product-stock">Initial Stock *</label>
                                <input 
                                    id="product-stock" 
                                    type="text" 
                                    value={formData.stock == 0 ? "" : formData.stock} 
                                    name='stock'
                                    onKeyDown={(e) => {
                                        // block: -, +, e, E
                                        if (['-', '+', 'e', 'E'].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onChange={changeFormData}           
                                    required  
                                    className=' p-1 border mini-component rounded-md outline-none'/>
                            </div>

                        </div>


                    </form>
                    <div className="flex justify-end gap-2 p-4">
                        <button className='mini-component border p-1 rounded-md text-gray-400'>Cancle</button>
                        <button className='mini-component border p-1 rounded-md text-black bg-teal-500'>Save Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProductForm