function getTypeFromParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('type');
}

const productType = getTypeFromParams();
const typeTitle = document.querySelector("#product__title");
const productWrapper = document.querySelector("#type_product");




getDataFromDB("", function(json) {

    switch (productType) {
        case "scooter":
            typeTitle.innerText = "Електросамокати";
            break;
        case "monowheel":
            typeTitle.innerText = "Моноколеса";
            break;
        case "giroscooter":
            typeTitle.innerText = "Гіроскутери";
            break;
        case "girobord":
            typeTitle.innerText = "Гіроборди";
            break;
        default:
            typeTitle.innerText = "Немає категорії";
    }
    json.forEach(element => {
        const card = createCard(element);
        if (element.type == productType) {
            productWrapper.appendChild(card);

        }

    });


});