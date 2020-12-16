const container = document.querySelector("#goods_container");
const popular = [11, 1, 6, 19];

getDataFromDB("", function(json) {
    json.forEach((element, index) => {
        if (popular.includes(index)) {
            const card = createCard(element);
            container.appendChild(card);
        }
    });
});