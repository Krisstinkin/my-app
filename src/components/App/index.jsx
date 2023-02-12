import Header from "components/Header";
import Product from "components/Goods";
import Footer from "components/Footer";
import { useState } from "react";

function App() {
   const [products, setProducts] = useState([
    {
      id: 1,
      firstName: "Молоко",
      lastName: "1,5%",
      weigth: 900,
      course: "Молочные товары",
      buttonText: "Добавлено"
    },
    {
      id: 2,
      firstName: "Хлеб",
      lastName: "Ржаной",
      weigth: 290,
      course: "Хлебобулочные изделия",
      buttonText: "Добавить"
    },
    {
      id: 3,
      firstName: "Шоколад",
      lastName: "Горький",
      weigth: 70,
      course: "Кондитерские товары",
      buttonText: "Добавить"
    },
    {
      id: 4,
      firstName: "Творог",
      lastName: "5%",
      weigth: 200,
      course: "Молочные товары",
      buttonText: "Добавлено"
    },
    {
      id: 5,
      firstName: "Мандарины",
      lastName: "Мароканские",
      weigth: 500,
      course: "Фрукты",
      buttonText: "Добавить"
    }
   ])

   const deleteStudent = (id) => {
      const filteredStudents = students.filter(student => student.id !== id)
      setStudents(filteredStudents) //обновляем наше состояние - передаем наш отфильтрованный массив. setStudents и придуман именно для того, чтобы мы в него могли передавать переделанный массив
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
                <Product key={product.id} product={product} deleteProduct={deleteProduct} changeAdd={changeAdd} />
              )
            })}
          </div>
          <Footer />
        </div>
    );
    
}

export default App;

//map это тоже самое, что и forEach - формирует новый массив из того, что мы здесь возвращаем
// вот этой записью <Student student={student} /> мы как будто вызываем функцию, которая отрисует нам студента. Просто недостаточно передать <Student /> - получим только HTML
//React всем дает ключи (key) для быстрой отрисовки изменений произошедших. Поэтому надо незабывать давать вот это состояние компонентам key={student.id}. Иначе он не поймет какой студент изменяется

