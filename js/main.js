import { DATA } from './data.js'

export const printItems= () => {
    for(let item of DATA){
        const list = document.querySelector('.app-list');
        const itemLi = document.createElement('li');
        const itemCard = document.createElement('div');
        const itemImg = document.createElement('img');
        const itemTopCard = document.createElement('div');
        const itemName = document.createElement('h5');
        const itemDescription = document.createElement('p');
        const itemoriginalPrice = document.createElement('p');
        const itemnewPrice = document.createElement('p');
        const itemButton = document.createElement('a');
        const itemPrices = document.createElement('div');
        const select = document.createElement('select');
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        const option4 = document.createElement('option');
        const option5 = document.createElement('option');

        const contentforDescription= document.createTextNode(item.description);
        const contentforName= document.createTextNode(item.name);
        const contentforButton= document.createTextNode('Add to my cart');
        const contentforOriginalPrice= document.createTextNode(item.prices.noDiscount);
        const contentforNewPrice= document.createTextNode(item.prices.Discount);
        const euro = document.createTextNode('€');
        const euro1 = document.createTextNode('€');
        const textOption1 = document.createTextNode(1);
        const textOption2 = document.createTextNode(2);
        const textOption3 = document.createTextNode(3);
        const textOption4 = document.createTextNode(4);
        const textOption5 = document.createTextNode(5);

        itemLi.setAttribute('class', 'myCard');
        itemLi.setAttribute('id', item.id);
        select.setAttribute('class', 'select');
        select.style='position:absolute; top:210px; right:10px;'
        itemCard.setAttribute('id', item.id);
        itemCard.setAttribute('class', 'card');
        itemCard.style='width: 18rem';
        itemImg.src=item.image;
        itemImg.setAttribute('class', 'card-img-top');
        itemImg.setAttribute('alt', item.name);
        itemTopCard.setAttribute('class', 'card-body');
        option1.setAttribute('class', 'option');
        option2.setAttribute('class', 'option');
        option3.setAttribute('class', 'option');
        option4.setAttribute('class', 'option');
        option5.setAttribute('class', 'option');
        itemName.setAttribute('class', 'card-title');
        itemDescription.setAttribute('class', 'card-text');
        itemoriginalPrice.setAttribute('class', 'originalPrice')
        itemnewPrice.setAttribute('class', 'newPrice')
        itemButton.setAttribute('class', 'btn btn-danger');
        itemButton.setAttribute('id', 'addingtoCart');
        itemButton.style='position:absolute; left:18px; color:white';
        itemPrices.setAttribute('class', 'prices');

        list.appendChild(itemLi);
        itemLi.appendChild(itemCard);
        itemCard.appendChild(itemImg);
        itemCard.appendChild(itemTopCard);
        itemTopCard.appendChild(itemName);
        itemTopCard.appendChild(itemDescription);
        itemTopCard.appendChild(select);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        option1.appendChild(textOption1);
        option2.appendChild(textOption2);
        option3.appendChild(textOption3);
        option4.appendChild(textOption4);
        option5.appendChild(textOption5);
        itemTopCard.appendChild(itemButton);
        itemTopCard.appendChild(itemPrices);
        itemPrices.appendChild(itemoriginalPrice);
        itemPrices.appendChild(itemnewPrice);

        itemName.appendChild(contentforName);
        itemDescription.appendChild(contentforDescription);
        itemButton.appendChild(contentforButton);
        itemoriginalPrice.appendChild(contentforOriginalPrice);
        itemnewPrice.appendChild(contentforNewPrice);
        itemnewPrice.appendChild(euro1);
        itemoriginalPrice.appendChild(euro);
    }
}