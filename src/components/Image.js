import React from 'react';




const Image = () => {
  const addImg = () => {
    // console.log(addimd);
    document.querySelector("#imagesContainer").insertAdjacentHTML('beforeend', '<img src="https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg" alt="Crumlow">');
  }

  const scaleUp = () => {

    document.querySelector("#imagesContainer").lastChild.style.width = `${document.querySelector("#imagesContainer").lastChild.clientWidth + 50}px`
  }

  const scaleDown = () => {
    if (document.querySelector("#imagesContainer").lastChild.clientWidth > 100) {
      document.querySelector("#imagesContainer").lastChild.style.width = `${document.querySelector("#imagesContainer").lastChild.clientWidth - 50}px`
    }
  }

  const removeImg = () => {
    document.querySelector("#imagesContainer").lastChild.remove()
  }

  return (
    <div>
      <div id='imagesContainer'>
        <img src={"https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg"} alt='Crumlow'></img>
      </div>
      <div className='buttons'>
        <button onClick={addImg}>Додати</button>
        <button onClick={scaleUp}>Збільшити </button>
        <button onClick={scaleDown}>Зменшити</button>
        <button onClick={removeImg}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
