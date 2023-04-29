import { useState } from 'react';
import './App.css';

const App= () => {

  const [cards, setCards] = useState([
    { id: 1, name : "밥먹기" },
    { id: 2, name : "잠자기" },
  ]);

  const [name, setName] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const clickAddButtonHandler = () => {
  const newCards = {
    id : cards.length + 1,
    name,
  }

  setCards([...cards, newCards])
  setName('');
};



  return (
    <div className='main'>
      <div className='Formbar'>
        <input value={name} onChange={nameChangeHandler}/>
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <h2 className='Todo'>Todo List</h2>
      <div className='main_content'>
        {cards.map(function (item) {
          return (
            <div key={item.id} className='content'>
              {item.name}
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
