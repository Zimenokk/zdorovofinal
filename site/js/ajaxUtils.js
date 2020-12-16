const dbUrl = 'https://zdorovosuperfinal.herokuapp.com/goods';

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