import Header from "components/Header";
import Product from "components/Goods";
import Footer from "components/Footer";
import ButtonAdd from "components/ButtonAdd";
import { useState } from "react";

export function App() {
   const [products, setProducts] = useState([
    {
      id: 1,
      firstName: "Молоко",
      lastName: "1,5%",
      weigth: 900,
      course: "Молочные товары"
    },
    {
      id: 2,
      firstName: "Хлеб",
      lastName: "Ржаной",
      weigth: 290,
      course: "Хлебобулочные изделия"
    },
    {
      id: 3,
      firstName: "Шоколад",
      lastName: "Горький",
      weigth: 70,
      course: "Кондитерские товары"
    },
    {
      id: 4,
      firstName: "Творог",
      lastName: "5%",
      weigth: 200,
      course: "Молочные товары"
    },
    {
      id: 5,
      firstName: "Мандарины",
      lastName: "Мароканские",
      weigth: 500,
      course: "Фрукты"
    }
   ])

   const deleteProduct = (id) => {
      const filteredProducts = products.filter(product => product.id !== id)
      setProducts(filteredProducts)
   }

    return (
        <div>
          <Header />
          <div className="mx-10 max-w-screen-lg mx-auto min-h-screen">
            {products.length === 0 && (
              <div className="mt-20 text-center text-7xl text-gray-300 font-thin">Список покупок пуст</div>
            )}
            {products.length > 0 && products.map((product) => {
              return (
                <Product key={product.id} product={product} deleteProduct={deleteProduct} />
              )
            })}
          </div>
          <Footer />
        </div>
    );
    
}

export function Add() {
 
  const [buttonText, setButtonText] = useState("Добавить");
  const changeText = (text) => setButtonText(text);

  return (
    <ButtonAdd onClick={() => changeText("Добавлено")}>{buttonText}</ButtonAdd>
  )
}




