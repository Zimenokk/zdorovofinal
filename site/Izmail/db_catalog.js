const scooter = document.querySelector("#scooter");
const monowheel = document.querySelector("#monowheel");
const giroscooter = document.querySelector("#giroscooter");
const girobord = document.querySelector("#girobord");
getDataFromDB("", function(json) {
    json.forEach(element => {
        const card = createCard(element);
        switch (element.type) {
            case "scooter":
                scooter.appendChild(card)
                break;
            case "monowheel":
                monowheel.appendChild(card)
                break;
            case "giroscooter":
                giroscooter.appendChild(card)
                break;
            case "girobord":
                girobord.appendChild(card)
                break;
        }
    });
});