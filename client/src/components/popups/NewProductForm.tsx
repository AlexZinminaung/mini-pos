


const NewProductForm = () => {
  return (
    // background black screen to cover the whole screen
    <div className="fixed z-50 inset-0 w-full h-dvh flex justify-center items-center bg-black/40 ">
        {/* Popup Component Here */}
        <div className="component flex flex-col gap-4 rounded-md text-sm text-gray-400 main-container">
            <div className="flex justify-between gap-2 p-4 mini-component ">
                <span>Add Product</span>
                <button>X</button>
            </div>
            <form>
                <div className="flex flex-col gap-2 p-4">
                    <span>Pick Image</span>
                    <div className="w-125 aspect-video bg-gray-400">
                    {/* Add Image Here */}
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="product-name">Product Name *</label>
                        <input id="product-name" type="text" required/>
                    </div>

                </div>


            </form>
            <div className="flex justify-end gap-2 p-4">
                <button>Cancle</button>
                <button>Save Product</button>
            </div>
        </div>
    </div>
  )
}

export default NewProductForm