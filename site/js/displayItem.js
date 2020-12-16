function getIdFromParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const cardName = document.querySelector(".itemCardName");
const cardPrice = document.querySelector(".itemCardPrice span");
const itemFeatures = document.querySelector(".itemFeatures");
const itemArticle = document.querySelector(".itemArticle");
const prodComp = document.querySelector(".prodComp");
const nutrVal = document.querySelector(".nutrVal");
const itemCardWeight = document.querySelector(".itemCardWeight span");

const bigSlider = document.querySelector(".gallery-top").swiper;
const smallSlider = document.querySelector(".gallery-thumbs").swiper;


const id = getIdFromParams();


// Картка товару
if (id) {
    getDataFromDB(id, (json) => {
        const data = json[0];
        console.log(data);
        cardName.innerText = data.name;
        cardPrice.innerText = data.price;
        itemArticle.innerText = data.article;
        prodComp.innerText = data.productСomposition;
        nutrVal.innerText = data.nutritionalvalue;
        itemCardWeight.innerText = data.weight;

        for (let tag of data.tags.split('~')) {
            itemFeatures.innerHTML += `<p class="features">${tag}</p>`
        }
        const slide1 = `<div class="swiper-slide"><img src="${data.img1}" alt=""></div>`;
        const slide2 = `<div class="swiper-slide"><img src="${data.img2}" alt=""></div>`;
        const slide3 = `<div class="swiper-slide"><img src="${data.img3}" alt=""></div>`;
        bigSlider.appendSlide([slide1, slide2, slide3]);
        smallSlider.appendSlide([slide1, slide2, slide3]);
    });

} else {}

// З цим купують_________________________________________________
// Контейнер для карточок
const container = document.getElementById('alsoItems');
const hitsLib = [1, 2, 3, 4, 5]; //Індекси елементів-хітів

getDataFromDB('', data => {
    hitsLib.forEach(i => {
        createCard(data[i])
    });
})



function createCard(item) {
    const good = document.createElement("div");
    good.classList.add("item");
    good.classList.add("itemCard");

    const priceData = item.issale ? //Если на скидке - то первые кавычки, если без, то вторые
        `<p class="prevPrice">${item.price} грн </p>
        <p class="actPrice"><span>${item.saleprice}</span> грн</p>` :
        `<p class="itemPrice"><span>${item.price}</span> грн</p>`;

    good.innerHTML = `
    <div class="itemPh itemPhCard"><img src="${item.img1}" alt="Смаколик"></div>
    <p class="itemName itemNameCard">${item.name}</p>
    <div class="downItem downItemCard">
        <div class="leftDownItem leftDownItemCard">
            <div class="allPrices allPricesCard">${priceData}</div>
            <p class="weight weightCard">${item.weight}гр</p>
        </div>
        <a href="index_item.html?id=${item.id}"><img src="images/Buy.png" alt="buy"></a>
    </div>
    `;

    container.appendChild(good);
}