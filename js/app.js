import { printItems } from './main.js';

printItems();

const cart = document.querySelector('#cart');
const list = document.querySelector('.app-list');
const buttons = document.querySelectorAll('#addingtoCart');
const card = document.querySelectorAll('.card');
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

    }
    addMealInfo(mealInfo)
}

function addMealInfo(meal){
const row = document.createElement('div');
row.setAttribute('class', 'row');
const mealImage = document.createElement('span');
const mealName = document.createElement('span');
const mealPrice = document.createElement('span');
const image = document.createElement('img');
const name = document.createElement('h5');
const price = document.createElement('p');
image.setAttribute('class', 'cartImg');
name.setAttribute('class','cartName');
price.setAttribute('class','cartPrice');
const nameText= document.createTextNode(meal.name);
const priceText= document.createTextNode(meal.prices);

image.src=meal.image;
name.appendChild(nameText);
price.appendChild(priceText);
mealImage.appendChild(image);
mealName.appendChild(name);
mealPrice.appendChild(price);
row.appendChild(mealImage);
row.appendChild(mealName);
row.appendChild(mealPrice);
cartList.appendChild(row);
}
