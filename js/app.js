import { printItems } from './main.js';

printItems();

const buttons = document.querySelectorAll('#addingtoCart');
const cartList = document.querySelector('.body__cartList');
const cleanCartButton = document.querySelector('.cleanCart');
const totalPrice = document.querySelector('.totalPrice');
const newPrice = document.querySelectorAll('.newPrice');
const newPriceArr = Array.prototype.slice.call(newPrice);

addListenerButtons();

function addListenerButtons(){
    for(let button of buttons){
       button.addEventListener('click', getMeal);
    }
    cleanCartButton.addEventListener('click', clearCart);
}

function getMeal(e){  
    const meal = e.target.parentElement.parentElement;
    getMealInfo(meal);
}

function getMealInfo(meal){
    const mealInfo = {
        id : meal.querySelector('div').getAttribute('id'),
        image: meal.querySelector('img').src,
        name: meal.querySelector('h5').textContent,
        description: meal.querySelector('.card-text').textContent,
        prices:meal.querySelector('.newPrice').textContent,
        select:meal.querySelector('select'),
    }
    addMealInfo(mealInfo);
  /*   increaseTotalCart(newPriceArr)
    console.log(newPriceArr[2]); */
}

function addMealInfo(meal){
        const row = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h5');
        const divPrice = document.createElement('div');
        const price = document.createElement('p');
        const button = document.createElement('button');
        const nameText= document.createTextNode(meal.name);
        const priceText= document.createTextNode(`${meal.prices*meal.select.value}€`);
        const buttonText= document.createTextNode('x');
    
        row.setAttribute('class', 'row');
        button.setAttribute('class', 'cartButton');
        image.setAttribute('class', 'cartImg');
        name.setAttribute('class','cartName');
        divPrice.setAttribute('class', 'divPrice');
        price.setAttribute('class','cartPrice');
    
        image.src=meal.image;
        name.appendChild(nameText);
        price.appendChild(priceText);
        divPrice.appendChild(price);
        button.appendChild(buttonText);
        cartList.appendChild(row);
        row.appendChild(image);
        row.appendChild(name);
        row.appendChild(divPrice);
        row.appendChild(button);

        const removeButtons = document.querySelectorAll('.cartButton');
        addListenerRemoveButtons(removeButtons);
    }


function addListenerRemoveButtons (removeButtons){
    for(let removeButton of removeButtons){
        removeButton.addEventListener('click', removeMeal)
    }
}

function removeMeal(e){
    e.preventDefault();
    const mealtoRemove = e.target.parentElement;
    mealtoRemove.remove();
}

function clearCart(e){
    e.preventDefault();
    while(cartList.firstChild){
        cartList.removeChild(cartList.firstChild);
    }
}

/* function increaseTotalCart(newPrice){
    let total = 0;
    for(let myPrice of newPrice){
       total += myPrice;
    }
   totalPrice.innerHTML=(`Total: ${total}€`);
} */
