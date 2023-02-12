const Product = (props) => {
    const { product, deleteProduct, changeAdd } = props

    return (
        <div className="bg-indigo-50 mt-10 py-6 px-8 rounded-md shadow-md flex justify-between">
            <div className="flex flex-col items-start">
                <p className="bg-indigo-200 text-indigo-800 font-semibold rounded-full px-3 py-1 shadow">{product.course}</p>
                <p className="text-2xl font-bold mt-4">{product.firstName} {product.lastName}</p>
                <p>Вес: {product.weigth} грамм</p>
            </div>

            <div className="flex flex-row mt-8 items-start">
                <a className="hover:underline cursor-pointer bg-indigo-200 text-indigo-800 font-semibold rounded-sm px-4 py-2 mb-4 shadow" onClick={() => deleteProduct(product.id)}>Удалить</a>
                <a className="hover:underline cursor-pointer bg-indigo-200 text-indigo-800 font-semibold rounded-sm px-4 py-2 shadow" onClick={() => changeAdd(product.id)}>{product.buttonText}</a>
            </div>
        </div>
    )
}

export default Product


