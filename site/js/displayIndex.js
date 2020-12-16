// Контейнер для карточок
const container = document.getElementById('innerHits');
const hitsLib = [0, 2, 4, 11, 14, 19]; //Індекси елементів-хітів

getDataFromDB('', data => {
    hitsLib.forEach(i => {
        createCard(data[i])
    });
})



function createCard(item) {
    const good = document.createElement("div");
    good.classList.add("item");

    const priceData = item.issale ? //Если на скидке - то первые кавычки, если без, то вторые
        `<p class="prevPrice">${item.price} грн </p>
        <p class="actPrice"><span>${item.saleprice}</span> грн</p>` :
        `<p class="itemPrice"><span>${item.price}</span> грн</p>`;

    good.innerHTML = `
    <div class="itemPh"><img src="${item.img1}" alt="Смаколик"></div>
    <p class="itemName">${item.name}</p>
    <div class="downItem">
        <div class="leftDownItem">
            <div class="allPrices">${priceData}</div>
            <p class="weight">${item.weight}гр</p>
        </div>
        <a href="index_item.html?id=${item.id}"><img src="images/Buy.png" alt="buy"></a>
    </div>
    `;

    container.appendChild(good);
}