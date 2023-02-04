import Button from "components/Button"

const Header = () => {
    return (
        <header className="bg-indigo-800 py-8 text-white font-semibold text-xl">
            <div className="max-w-screen-lg flex justify-between mx-auto px-10">
                <nav className="flex gap-8 justify-center items-center">
                <div>
                    Список студентов
                </div>
                <div>
                    Контакты
                </div>
                <div>
                    Отзывы
                </div>
                </nav>
                <Button title='Связаться с нами'/>
            </div>
        </header>
    )
}

export default Header