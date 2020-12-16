const dbUrl = 'https://electrowheels.herokuapp.com/goods';

function getDataFromDB(id, callbackHandler) {
    function getRequestObject() {
        if (window.XMLHttpRequest) return new XMLHttpRequest();
        else if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        window.alert("Ajax is not supported!");
        return null;
    }
    const request = getRequestObject();

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            result = JSON.parse(request.responseText);
            callbackHandler(result);
        }
    };
    request.open('GET', `${dbUrl}/${id}`, true);
    request.send(null);

}

function createCard(object) {
    const good = document.createElement("div");
    good.classList.add("good");
    const href = "product.html?id=" + object.id;
    const busket = `<div class="busket ">
                        <img src="icons/new_basket.png " alt=" ">
                    </div>`

    let stockDiv;
    if (object.stock) {
        stockDiv = `<p>Є в наявноcті</p>`;

    } else {
        stockDiv = `<p>Немає у наявноcті</p>`;
        good.classList.add("not_stock");
    }
    good.innerHTML = `
    <div class="imgs">
        <img src="${object.imgs.split("&")[0]}" alt=" ">
    </div>
     <div class="product_name ">
         <p>${object.name}</p>
    </div>
    <div class="price_busket ">
        <div class="price ">
            <p>${object.price} ₴</p>
        </div>
        ${object.stock?busket:""}
    </div>
    <div class="stock ">
       ${stockDiv}
    </div>
    `;

    return good;
}