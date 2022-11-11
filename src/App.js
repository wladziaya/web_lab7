import React from 'react';
import './App.css'
import Task1 from './components/Task1';
import Task2 from './components/Task2';

const App = () => {
  const [taskBtn, setTasBtn] = React.useState(true)
  const [btnText, setBtnText] = React.useState('Наступне завдання')
  const goods = [
    {
        'image': 'avocado.png',
        'name': 'Авокадо',
        'price': 35,
        'id': 1
    }, 
    {
        'image': 'broccoli.png',
        'name': 'Броколі',
        'price': 40,
        'id': 2
    }, 
    {
        'image': 'banana.png',
        'name': 'Банан',
        'price': 39,
        'id': 3
    },
    {
        'image': 'tomato.png',
        'name': 'Помідор',
        'price': 46,
        'id': 4
    }, 
    {
        'image': 'pumpkin.png',
        'name': 'Гарбуз',
        'price': 37,
        'id': 5
    }, 
    {
        'image': 'carrot.png',
        'name': 'Морква',
        'price': 25,
        'id': 6

    }, 
    {
        'image': 'watermelon.png',
        'name': 'Кавун',
        'price': 250,
        'id': 7
    }, 
    {
        'image': 'almond.png',
        'name': 'Мигдаль',
        'price': 190,
        'id': 8
    },
    {
      'image': 'lemon.png',
      'name': 'Лимон',
      'price': 23,
      'id': 9
  }
]
  
  const changeTask = () => {
    setTasBtn(!taskBtn)
    taskBtn? setBtnText('Попереднє завдання') : setBtnText('Наступне завдання')
  }
  return (
    <div className='wrapper'>
      <button onClick={changeTask}>{btnText}</button>
      {taskBtn ? <Task1/>: <Task2 items={goods}/>}
    </div>
  );
}

export default App;
