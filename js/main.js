import { DATA } from './data.js'


const printItems= () => {
    for(let item of DATA){
        const list = document.querySelector('.app-list');
        const itemLi = document.createElement('li')
        const itemCard = document.createElement('div')
        const itemImg = document.createElement('img')
        const itemTopCard = document.createElement('div')
        const itemBottomCard = document.createElement('div')
        const itemName = document.createElement('h5')
        const itemDescription = document.createElement('p')
        const itemoriginalPrice = document.createElement('p')
        const itemnewPrice = document.createElement('p')
        const itemButton = document.createElement('a')
        const itemPrices = document.createElement('div')

        const contentforDescription= document.createTextNode(item.description);
        const contentforName= document.createTextNode(item.name);
        const contentforButton= document.createTextNode('Add to my cart');
        const contentforOriginalPrice= document.createTextNode(item.prices.noDiscount);
        const contentforNewPrice= document.createTextNode(item.prices.Discount);
        const euro = document.createTextNode('€');

        itemLi.setAttribute('class', 'myCard');
        itemCard.setAttribute('class', 'card');
        itemCard.style='width: 18rem';
        itemImg.src=item.image;
        itemImg.setAttribute('class', 'card-img-top');
        itemImg.setAttribute('alt', item.name);
        itemTopCard.setAttribute('class', 'card-body');
        itemBottomCard.setAttribute('class', 'bottom-card');
        itemName.setAttribute('class', 'card-title');
        itemDescription.setAttribute('class', 'card-text');
        itemoriginalPrice.setAttribute('class', 'originalPrice')
        itemnewPrice.setAttribute('class', 'newPrice')
        itemButton.setAttribute('class', 'btn btn-danger');
        itemButton.style='position:absolute; left:18px;';
        itemPrices.setAttribute('class', 'prices');

        list.appendChild(itemLi);
        itemLi.appendChild(itemCard);
        itemCard.appendChild(itemImg);
        itemCard.appendChild(itemTopCard);
        itemTopCard.appendChild(itemName);
        itemTopCard.appendChild(itemDescription);
        itemCard.appendChild(itemBottomCard);
        itemBottomCard.appendChild(itemButton);
        itemBottomCard.appendChild(itemPrices);
        itemPrices.appendChild(itemoriginalPrice);
        itemPrices.appendChild(itemnewPrice);

        itemName.appendChild(contentforName);
        itemDescription.appendChild(contentforDescription);
        itemButton.appendChild(contentforButton);
        itemoriginalPrice.appendChild(contentforOriginalPrice);
        itemoriginalPrice.appendChild(euro);
        itemnewPrice.appendChild(contentforNewPrice);
        itemnewPrice.appendChild(euro);
    }
}
printItems();