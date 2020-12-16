// Контейнер для карточок
const container = document.getElementById('innerCatalog');

getDataFromDB('', data => {
    for (let item of data) {
        createCard(item)
    }
    initCatalogLogic();
})

// 
function createCard(item) {
    const good = document.createElement("div");
    good.classList.add("item");

    const priceData = item.issale ? //Если на скидке - то первые кавычки, если без, то вторые
        `<p class="prevPrice prevCatPrice">${item.price} грн </p>
        <p class="actPrice  finalPrice actCatPrice "><span>${item.saleprice}</span> грн</p>` :
        `<p class="itemPrice finalPrice itemPriceCatalog"><span>${item.price}</span> грн</p>`;

    good.innerHTML = `<div class="itemCatalogPh"><a href="index_item.html?id=${item.id}"> <img src="${item.img1}" alt="Смаколик"></a></div>

    <p class="itemCatalogName">${item.name}</p>
    <div class="downCatalogItem">
        <div class="leftDownCatalogItem">
            <div class="allPricesCatalog">
                ${priceData}
            </div>
            <p class="weightCat">${item.weight}гр</p>
        </div>
        <div class="middleCatalogItem">
            <p class="minusButton">-</p>
            <p class="counter">0</p>
            <p class="plusButton">+</p>
        </div>
        <a class="clicktoBuy" href="#${item.id}"><img src="images/Buy.png" alt="buy"></a>
    </div>
    `;

    container.appendChild(good);
}