import { printItems } from './main.js';

printItems();

const cart = document.querySelector('#cart');
const list = document.querySelector('.app-list');
const buttons = document.querySelectorAll('#addingtoCart');
const card = document.querySelectorAll('.card')

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
const getMealInfo=(meal)=>(console.log(meal));
