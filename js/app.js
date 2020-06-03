import { printItems } from './main.js';

printItems();

const buttons = document.querySelectorAll('#addingtoCart');
const cartList= document.querySelector('.body__cartList');

addListenerButtons()

function addListenerButtons(){
    for(let button of buttons){
       button.addEventListener('click', getMeal);
    }
    
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
    addMealInfo(mealInfo)
}

function addMealInfo(meal){
        const row = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h5');
        const divPrice = document.createElement('div');
        const price = document.createElement('p');
        const button = document.createElement('div');
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
    }
