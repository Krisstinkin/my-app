//если не добавить props со значениями student и deleteStudent, то ничего работать не будет. Т.к. мы эти свойства написали на другом листе - сюда их необходимо добавить. По логике с областью видимости.

const Student = (props) => {
    const { student, deleteStudent } = props

    return (
        <div className="bg-indigo-50 mt-10 py-6 px-8 rounded-md shadow-md flex justify-between">
            <div className="flex flex-col items-start">
                <p className="bg-indigo-200 text-indigo-800 font-semibold rounded-full px-3 py-1 shadow">Курс: {student.course}</p>
                <p className="text-2xl font-bold mt-4">{student.firstName} {student.lastName}</p>
                <p>Возраст: {student.age}</p>
            </div>

            <a className="hover:underline cursor-pointer" onClick={() => deleteStudent(student.id)}>Удалить</a>
        </div>
    )
}

export default Student

// если onClick написать вот так onClick={deleteStudent(student.id)}, то все студенты удаляться. Потому что он дойдет до первого же студента и все удалит. Надо добавить функцию () =>. 