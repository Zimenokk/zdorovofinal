function getIdFromParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const if_stock = document.querySelector("#if_stock");
const busket_button = document.querySelector("#js_button");


const product_name = document.querySelector("#name_product");
const product_price = document.querySelector("#price_product");
const slider_top_imgs = document.querySelector(".gallery-top").swiper;
const slider_bottom_imgs = document.querySelector(".gallery-thumbs").swiper;


const id = getIdFromParams();
if (id) {
    getDataFromDB(getIdFromParams(), function(json) {


        const object = json[0];
        product_name.innerText = object.name;
        product_price.innerText = object.price + " ₴";


        let ifStock, textStock, nottextStock, busket;
        nottextStock = "Немає у наявноcті";
        textStock = "Є у наявноcті";
        if (object.stock) {
            ifStock = `<div class="galka">
                            <img src="logo/galka.png" width="25px" alt="">
                        </div>
                        <div class="stock_text">
                            ${textStock}
                         </div>`;
            busket = `<div class="buskett">
                        <img src="icons/new_basket3.png" alt="">
                     </div>
                     <div class="word_buy">
                         <p>Купити</p>
                    </div>`;

        } else {
            ifStock = `<div class="galka">
                            <img src="logo/cross.png" width="25px" alt="">
                     </div>
                     <div class="stock_text">
                         ${nottextStock}
                    </div>`;
            busket = "";

        }
        if_stock.innerHTML = ifStock;
        busket_button.innerHTML = busket;

        const imgs = object.imgs.split("&");
        imgs.forEach(img => {
            slider_top_imgs.appendSlide([`<div class="swiper-slide swiper-slide_product">
                                <img src="${img}" alt="giro">
                                </div>`]);
            slider_bottom_imgs.appendSlide([`<div class="swiper-slide swiper-slide_product">
                                        <img src="${img}" alt="giro">
                                 </div>`]);

        });

    });

} else {
    //Допісать обработку на случай перешел на страніцу товара которого не существует
}