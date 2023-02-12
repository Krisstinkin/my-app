import Header from "components/Header";
import Student from "components/Student";
import Footer from "components/Footer";
import { useState } from "react";

function App() {
   const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "Анна",
      lastName: "Иванова",
      age: 12,
      course: "Рисование"
    },
    {
      id: 2,
      firstName: "Олег",
      lastName: "Петров",
      age: 32,
      course: "Программирование"
    },
    {
      id: 3,
      firstName: "Ирина",
      lastName: "Семенова",
      age: 28,
      course: "Программирование"
    },
    {
      id: 4,
      firstName: "Екатерина",
      lastName: "Степанова",
      age: 30,
      course: "Психология"
    }
   ])

   //отфильтруем всех студентов по id отличному от того, который передали. Т.е. по сути не покажем на экране тот толького студента на которого нажали.
   const deleteStudent = (id) => {
      const filteredStudents = students.filter(student => student.id !== id)
      setStudents(filteredStudents) //обновляем наше состояние - передаем наш отфильтрованный массив. setStudents и придуман именно для того, чтобы мы в него могли передавать переделанный массив
   }

    return (
        <div>
          <Header />
          <div className="mx-10 max-w-screen-lg mx-auto min-h-screen">
            {students.length === 0 && (
              <div className="mt-20 text-center text-7xl text-gray-300 font-thin">Нет студентов</div>
            )}
            {students.length > 0 && students.map((student) => {
              return (
                <Student key={student.id} student={student} deleteStudent={deleteStudent} />
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

