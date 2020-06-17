import { printItems } from './main.js';

printItems();

const buttons = document.querySelectorAll('#addingtoCart');
const cartList = document.querySelector('.body__cartList');
const cleanCartButton = document.querySelector('.cleanCart');
const iconCart = document.querySelector('.fa-shopping-cart');
const totalPrice = document.querySelector('.totalPrice');

let selectedMeals = getLocalStorage();
addListenerButtons();

function addListenerButtons(){
    for(let button of buttons){
       button.addEventListener('click', getMeal);
    }
    cleanCartButton.addEventListener('click', clearCart);
    document.addEventListener('DOMContentLoaded', readLocalStorage);
   
}

function getMeal(e){  
    const meal = e.target.parentElement.parentElement;
    iconCart.classList.add('animate');
    setInterval(function() {
    iconCart.classList.remove('animate');
    }, 2000);
    getMealInfo(meal);
}

function getMealInfo(meal){
    const mealInfo = {
        id:meal.id,
        image: meal.querySelector('img').src,
        name: meal.querySelector('h5').textContent,
        description: meal.querySelector('.card-text').textContent,
        select:meal.querySelector('select'),
        prices: parseInt(meal.querySelector('.newPrice').textContent)   
    }
    addMealInfo(mealInfo);
}
function sumTotalPrice(selectedMeals){
    let value=0;
    const reducer = (accumulator, singleMeal)=> {
        const totalSinglePrice = singleMeal.prices* singleMeal.quantity;
        return accumulator + (totalSinglePrice);
    }
    const total = selectedMeals.reduce(reducer, value)
        totalPrice.innerHTML = (`Total: ${total}€`);
   }

function addMealInfo(meal){
    if(selectedMeals.indexOf(meal) === -1){
        selectedMeals.push(meal);
        const row = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h5');
        const divPrice = document.createElement('div');
        const price = document.createElement('p');
        const button = document.createElement('button');
        const nameText = document.createTextNode(meal.name);
        meal.quantity = meal.select.value;
        const priceText = document.createTextNode(`${ meal.prices * meal.quantity }€`);
        const buttonText = document.createTextNode('x');
    
        row.setAttribute('class', 'row');
        row.setAttribute('value', meal.select.value);
        row.setAttribute('id', meal.id);
        button.setAttribute('class', 'cartButton');
        button.setAttribute('id', meal.id);
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
        setlLocalStorage(meal);
        sumTotalPrice(selectedMeals)
        console.log(cartList)
    }else{
        alert(`🍣 You alredy have ${meal.name} in your cart!`)
    }
}


function addListenerRemoveButtons (removeButtons){
    for(let removeButton of removeButtons){
        removeButton.addEventListener('click', removeMeal)
    }
}

function removeMeal(e){
    e.preventDefault();
    const mealtoRemove = e.target.parentElement;
    const cartList = [...e.target.parentElement.parentElement.children];
    const mealIdLS = mealtoRemove.querySelector('button').getAttribute('id');
    const elemIndex = cartList.indexOf(mealtoRemove);
    mealtoRemove.remove();
    deleteMealLocalStorage(mealIdLS);
    selectedMeals.splice(elemIndex, 1);
    sumTotalPrice(selectedMeals);
}

function clearCart(e){
    e.preventDefault();
    while(cartList.firstChild){
        cartList.removeChild(cartList.firstChild);
    }
    clearCartLocalStorage();
    sumTotalPrice(selectedMeals);
}

function setlLocalStorage(meal){
  let meals=[];
  meals = getLocalStorage();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
}

function getLocalStorage(){
   let meals;
   if(localStorage.getItem('meals') === null){
    meals =[];
    } else {
        meals=JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
}

function readLocalStorage(){
    let mealLs;
    mealLs = getLocalStorage();
    mealLs.forEach(function(meal){
        const row = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h5');
        const divPrice = document.createElement('div');
        const price = document.createElement('p');
        const button = document.createElement('button');
        const nameText= document.createTextNode(meal.name);
        const priceText= document.createTextNode(`${ meal.prices * meal.quantity}€`);
        const buttonText= document.createTextNode('x');
    
        row.setAttribute('class', 'row');
        button.setAttribute('class', 'cartButton');
        button.setAttribute('id', meal.id);
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
        sumTotalPrice(selectedMeals);
    })
}
function deleteMealLocalStorage(mealIdLS){
    let mealsLS;
    mealsLS = getLocalStorage();
    const findMeal = mealsLS.findIndex(meals=>meals.id===mealIdLS);
    mealsLS.splice(findMeal,1);
    localStorage.setItem('meals', JSON.stringify(mealsLS));
}

function clearCartLocalStorage(){
    localStorage.clear();
    selectedMeals = [];
}