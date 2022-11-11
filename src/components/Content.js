import React from 'react';

const City = () => {
  return (
    <div className='city'>
      <p><b>Чеські Крумлов</b> – невелике містечко на південному заході Чехії, яке облюбувало береги величної Влтави неподалік
        кордону з Австрією.
        <br />Воно буквально просякнутий автентичною атмосферою Середньовіччя: є грандіозний замковий
        комплекс, звивисті вулички, обрамлені милими червонокрихими будиночками, безліч старовинних церков та інших
        культових будівель, сузір'я фонів.
      </p>
      <p>Місто безсумнівно заслужило свій статус Світової спадщини ЮНЕСКО.</p>
    </div>
  )
}

class Content extends React.Component {
  changeColor = (e) => {
    e.currentTarget.style.background =  '#'+ Math.floor(Math.random() * 16777215).toString(16);
    e.currentTarget.style.color = '#'+ Math.floor(Math.random() * 16777215).toString(16);
  }
  render() {
    return <div>
      <div className='biography'>
      <p><b>Дата та місце народження: </b>11 грудня 2001 року, місто Київ, Україна.</p>
      <p onClick={this.changeColor}><b>Освіта: </b>11 грудня 2001 року, місто Київ, Україна.</p>
      <div style={{ float: 'left', width: '50%' }}>
        <p onClick={this.changeColor}>Мої хобі:</p>
        <ul>
          <li>Подорожі</li>
          <li>Волонтерство</li>
          <li>Більярд</li>
          <li>Малювання</li>
        </ul>
      </div>
      <div style={{ float: 'right', width: '50%' }}>
        <p>Мої улюблені книги:</p>
        <ol>
          <li>"Передбачувана ірраціональність"</li>
          <li>"Маленький принц"</li>
          <li>"Гордість і упередження"</li>
          <li>"Переможцю не дістається нічого"</li>
        </ol>
      </div>
    </div>
      <City/>
    </div>;
  }
}

export default Content;
