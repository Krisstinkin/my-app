import { useState } from "react";
import './App.css';
import Button from 'components/Button';

function App() {
    const [count, setCount] = useState(0)

    const plus = () => {
      setCount(count + 1)
    }

    const minus = () => {
      setCount(count - 1)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-24">Счетчик</h1>   
            <p className="text-8xl font-bold text-center mt-12">{count}</p>
            <div className="flex justify-center mt-12">
              <Button title='Отнять -1' changeCount={minus} />
              <Button title='Прибавить +1' changeCount={plus} />
            </div> 
        </div>
    );
}

export default App;

//одинаковые записи на онклик
{/* <Button title='Отнять -1' onClick={() => setCount(count - 1)} />
<Button title='Прибавить +1' onClick={() => setCount(count + 1)} /> */}
