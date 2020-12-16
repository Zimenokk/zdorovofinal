function initCatalogLogic() {

    // счётчик
    const counterWrappers = document.getElementsByClassName('item');
    for (let counterWrapper of counterWrappers) {
        const plusButton = counterWrapper.querySelector('.plusButton');
        const minusButton = counterWrapper.querySelector('.minusButton');
        const counterMember = counterWrapper.querySelector('.counter');
        const price = counterWrapper.querySelector('.finalPrice span');
        const buyBTN = counterWrapper.querySelector('.clicktoBuy');

        plusButton.onclick = _ => {
            const number = +counterMember.innerText;
            counterMember.innerText = number + 1;

        }

        minusButton.onclick = _ => {
            const number = +counterMember.innerText;
            if (number > 0)
                counterMember.innerText = number - 1;
            // else counterMember.innerText
        }
        buyBTN.onclick = _ => {
            if (+counterMember.innerText > 0) {
                const summaryPrice = +counterMember.innerText * +price.innerText;
                alert('Ви успішно придбали смачну страву, вітаємо! \nСумма покупки складає ' + summaryPrice + ' грн за ' + counterMember.innerText + ' одиниць товару.')

            } else { alert('Оберіть кількість товару для покупки.') }
        }

    }
}